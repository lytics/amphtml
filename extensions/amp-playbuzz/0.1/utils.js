/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {dict} from './../../../src/core/types/object';
import {getData} from './../../../src/event-helper';
import {parseJson} from './../../../src/json';
import {
  parseUrlDeprecated,
  removeFragment,
  serializeQueryString,
} from '../../../src/url';
import {rethrowAsync} from './../../../src/log';

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func
 * @param {number} wait
 * @param {boolean=} immediate
 * @return {Function}
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, wait);
    if (immediate && !timeout) {
      func.apply(this, args);
    }
  };
}

/**
 *
 * Gets an element creator using a given document to create elements.
 * @param {Document} document
 * @return {!Function}
 */
export function getElementCreator(document) {
  return function createElement(name, className, children) {
    const element = document.createElement(name);
    element.className = className;
    appendChildren(element, children);
    return element;
  };
}

/**
 * Appends children to element
 *
 * @param {!Element} element
 * @param {!Array<!Element>} children
 */
function appendChildren(element, children) {
  children = !children ? [] : Array.isArray(children) ? children : [children];
  children.forEach((child) => element.appendChild(child));
}

/**
 * Handles a message from element by a given message name
 *
 * @param {Element} element
 * @param {!Event} event
 * @param {string} messageName
 * @param {Function} handler
 */
export function handleMessageByName(element, event, messageName, handler) {
  const isMessageFromElement = element.contentWindow === event.source;

  if (isMessageFromElement) {
    handlePlaybuzzItemEvent(event, messageName, handler);
  }
}

/**
 * @param {!Event} event
 * @param {string} eventName
 * @param {Function} handler
 */
function handlePlaybuzzItemEvent(event, eventName, handler) {
  const data = parsePlaybuzzEventData(getData(event));
  if (data[eventName]) {
    handler(data[eventName]);
  }
}

/**
 * Parses Playbuzz Event Data
 *
 * @param {?JsonObject|string|undefined} data
 * @return {?JsonObject|undefined} parsedObject
 */
function parsePlaybuzzEventData(data) {
  if (typeof data === 'object') {
    return data;
  }
  const err = 'error parsing json message from playbuzz item: ' + data;
  try {
    if (typeof data === 'string') {
      return parseJson(/** @type {string} */ (data));
    }
  } catch (e) {
    rethrowAsync('amp-playbuzz', err, e);
    return dict({});
  }

  rethrowAsync('amp-playbuzz', err, data);
  return dict({});
}

/**
 * @param {Object} options
 * @return {string} playbuzzEmbedUrl
 */
export function composeEmbedUrl(options) {
  const embedUrl =
    options.itemUrl +
    '?' +
    serializeQueryString(
      dict({
        'feed': true,
        'implementation': 'amp',
        'src': options.itemUrl,
        'embedBy': '00000000-0000-0000-0000-000000000000',
        'game': options.relativeUrl,
        'comments': undefined,
        'useComments': options.displayComments,
        'gameInfo': options.displayItemInfo,
        'useShares': options.displayShareBar,
        'socialReferrer': false, //always false - will use parent url for sharing
        'height': 'auto', //must pass as is - if not, makes problems in trivia (iframe height scrolling)
        'parentUrl': options.parentUrl, //used for sharing
        'parentHost': options.parentHost,
      })
    );
  return embedUrl;
}

/**
 * Satizes URL
 *
 * @param {*} localtion
 * @return {string}
 */
function sanitizeUrl(localtion) {
  const url = removeFragment(localtion.href).replace(localtion.protocol, ''); //remove scheme (cors) & fragment
  return url.replace(/(www\.)?playbuzz\.com/, 'app.ex.co/stories');
}

/**
 * Conposes src url
 *
 * @param {string} src
 * @param {string} itemId
 * @return {string}
 */
export function composeItemSrcUrl(src, itemId) {
  const DEFAULT_BASE_URL = '//app.ex.co/stories/';

  const iframeSrcUrl = itemId
    ? DEFAULT_BASE_URL + 'item/' + itemId
    : sanitizeUrl(parseUrlDeprecated(src));

  return iframeSrcUrl;
}
