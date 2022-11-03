// ==UserScript==
// @name         IMDb - Getting IDs from keywords searcher
// @namespace    http://gtaweb.eu/tampermonkey
// @version      0.1
// @author       PLTytus
// @downloadURL  https://bitbucket.org/PLTytus/imdb-getting-ids-from-keywords-searcher/raw/master/imdb_getting_ids_from_keywords_searcher.user.js
// @updateURL    https://bitbucket.org/PLTytus/imdb-getting-ids-from-keywords-searcher/raw/master/imdb_getting_ids_from_keywords_searcher.meta.js
// @match        https://www.imdb.com/search/keyword/?keywords=*
// @grant        none
// @require      http://code.jquery.com/jquery-3.6.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
        $("body").append("<button id='_tampermonkey_pltytus_button'>COPY IDs OF VISIBLE TITLES</button>");
        $("#_tampermonkey_pltytus_button").css({
            "position": "fixed",
            "bottom": "5px",
            "left": "5px",
        }).on("click", function(){
            let ids = [...document.querySelectorAll(".lister-item-header a")].map(x => x.href.replace(/[^0-9]/g, "")).join(",");
            navigator.clipboard.writeText(ids)
            console.log(ids);
        });
    });
})();