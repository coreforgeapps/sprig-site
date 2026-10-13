/**
 * Shared Sprig vs competitors compare cards.
 * Mount: <div class="cards compare-cards" data-compare-cards></div>
 * then <script src="/js/compare-cards.js"></script>
 */
(function () {
  var html =
    '<article class="card me">' +
      '<h3>Sprig <span class="badge-free">Free test drive</span></h3>' +
      '<div class="field">' +
        '<div class="field-label">Price</div>' +
        '<div class="field-value">$49.99 first year, then $79.99/yr</div>' +
      '</div>' +
      '<div class="field">' +
        '<div class="field-label">Transactions kept</div>' +
        '<div class="field-value">Your Apple devices and your own iCloud, not our servers</div>' +
      '</div>' +
      '<div class="compare-extra">' +
        '<div class="field">' +
          '<div class="field-label">Ads / sells data</div>' +
          '<div class="field-value">No / No</div>' +
        '</div>' +
        '<div class="field">' +
          '<div class="field-label">Bank connections</div>' +
          '<div class="field-value">Read-only. No one can move your money through Sprig.</div>' +
        '</div>' +
        '<div class="field">' +
          '<div class="field-label">Platforms</div>' +
          '<div class="field-value">iPhone &amp; iPad. Coming soon: Mac &amp; Web.</div>' +
        '</div>' +
      '</div>' +
    '</article>' +
    '<article class="card">' +
      '<h3>Copilot</h3>' +
      '<div class="field">' +
        '<div class="field-label">Price</div>' +
        '<div class="field-value">$95/yr</div>' +
      '</div>' +
      '<div class="field">' +
        '<div class="field-label">Transactions kept</div>' +
        '<div class="field-value">Stored on their systems</div>' +
      '</div>' +
      '<div class="compare-extra" aria-hidden="true"></div>' +
    '</article>' +
    '<article class="card">' +
      '<h3>Monarch</h3>' +
      '<div class="field">' +
        '<div class="field-label">Price</div>' +
        '<div class="field-value">$99.99/yr</div>' +
      '</div>' +
      '<div class="field">' +
        '<div class="field-label">Transactions kept</div>' +
        '<div class="field-value">Stored on their systems</div>' +
      '</div>' +
      '<div class="compare-extra" aria-hidden="true"></div>' +
    '</article>' +
    '<article class="card">' +
      '<h3>YNAB</h3>' +
      '<div class="field">' +
        '<div class="field-label">Price</div>' +
        '<div class="field-value">$109/yr</div>' +
      '</div>' +
      '<div class="field">' +
        '<div class="field-label">Transactions kept</div>' +
        '<div class="field-value">Stored on their systems</div>' +
      '</div>' +
      '<div class="compare-extra" aria-hidden="true"></div>' +
    '</article>';

  document.querySelectorAll("[data-compare-cards]").forEach(function (el) {
    el.innerHTML = html;
    el.removeAttribute("data-compare-cards");
  });
})();
