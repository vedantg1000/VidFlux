const titles = [
    ["After (2019) (Hindi - English)", "https://themoviespoiler.com/wp-content/uploads/2019/04/AFTER-2019.jpg"],
    ["After We Collided (2020) (Hindi - English)", "https://tse4.mm.bing.net/th/id/OIP.RZ44Pv93lmwWkDlwyR-ZkgAAAA?w=426&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"],
    ["After We Fell (2021) (Hindi - English)", "https://m.media-amazon.com/images/S/pv-target-images/2efd4f69134a73771b9570ce88841e97cb0cc9575d0f952fc00209589df6f3c1.jpg"],
    ["After Ever Happy (2022) (Hindi - English)", "https://cdn.justjared.com/wp-content/uploads/2022/07/after-happy/after-ever-happy-trailer-02.jpg"],
    ["After Everything (2023) (Hindi - English)", "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/after-everything-movie-poster-showing-hero-fiennes-tiffin-as-hardin-scott-and-josephgine-langford-as-tessa-young-holding-hands-and-looking-into-each-others-eyes.jpeg?q=49&fit=contain&w=480&dpr=2"],
    ["My Fault (2023) (Hindi - English)", "https://tse1.mm.bing.net/th/id/OIP.oUs8DBNrxqzKgYTech3w4QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"],
    ["Your Fault (2024) (Hindi - English)", "https://tse3.mm.bing.net/th/id/OIP.GH4e0jkZ9BWugqAV5wtAVQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"],
    ["My Fault London (2025) (Hindi - English)", "https://th.bing.com/th/id/R.d2d42a8271b369189e4a06a4bdb80e97?rik=8NDcXkMll6EyKw&riu=http%3a%2f%2fwww.impawards.com%2f2025%2fposters%2fmy_fault_london_ver2.jpg&ehk=fXM6NFVuwnQHpINoFSBe%2fxvpBcfBFfG9zYQMdjjtr90%3d&risl=&pid=ImgRaw&r=0"],
    ["Our Fault (2025) (Hindi - English)", "https://tse2.mm.bing.net/th/id/OIP.0cyqZVxDo3JMKMsnDJsLKAHaKk?rs=1&pid=ImgDetMain&o=7&rm=3"],
    ["Along For the Ride (2022) (Hindi - English)", "https://whats-after-the-movie-ti152.sevalla.storage/movies/along-for-the-ride-2022.jpg"],
    ["Secret Society (2021)", "https://images.plex.tv/photo?scale=1&size=large-1920&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fb%2Fgracenote%2Fb46e630a963163dc9f8335f31110d8c2.jpg"],
    ["Secret Society 2 (2022)", "https://image.tmdb.org/t/p/original/tW8ul4wfztzlpRBhbmmWY104SjM.jpg"],
    ["Secret Society 3 (2023)", "https://image.tmdb.org/t/p/w780/85hZLCPjY3XpBXqOf5LXAUQaxQj.jpg"],
    ["Another Simple Favor (2025) (Hindi - English)", "https://resizing.flixster.com/rYw-sAhxctliSFnplZGFvxvFiMg%3D/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVmZTRiYmQxLTA3MWEtNDY4ZC1hMTViLWYwYmRiZjM1OWI4MS5qcGc="],
    ["Cocktail 2 (2026)", "https://mediafiles.cineplex.com/Central/Film/Posters/61569_768_1024.jpg"],
    ["Wonderful Nightmare (2025) (Hindi - English)", "https://m.media-amazon.com/images/M/MV5BM2Y5MmE0MGEtZjg2OS00MjQ3LTk5MTMtZWM0NDIxYjA1ZmE0XkEyXkFqcGc%40._V1_.jpg"],
    ["Karate Kid Legends (2025) (Hindi - English)", "https://image.tmdb.org/t/p/original/ke2azC8aj5WbB7t6v3EbBJSqBPt.jpg"],
    ["People We Meet on Vacation (2026) (Hindi - English)", "https://image.tmdb.org/t/p/original/8FnuMhzCu4xJCFJap8xS5RYwUbW.jpg"],
    ["Soulm8te (2026) (English)", "https://image.tmdb.org/t/p/original/bNErActDctl6cdUGw9pnjSCmyhQ.jpg"],
    ["The Other Zoey (2023) (Hindi - English)", "https://www.dvd-trailers.gr/photos/media/the_other_zoey_2023_205963.jpg"],
    ["Fall For Me (2025) (Hindi - English - German)", "https://cdn.kinocheck.com/i/x72nnkyzzv.jpg"],
    ["Regretting You (2025) (Hindi - English)", "https://icicine.com/media/1126/01K2YGR5F5SG3KXHMCB7MT0RQQ.jpg"],
    ["Game of Love (2022) (Hindi - English)", "https://images.justwatch.com/poster/307063146/s718/time-is-up-2.jpg"],
    ["The Transporter Refueled (2015) (Hindi - English)", "https://i0.wp.com/fontlot.com/wp-content/uploads/2023/01/1-10.jpg"],
    ["Bad Girl (2025)", "https://static.moviecrow.com/gallery/20250903/250744-bad%20girl3.jpeg"],
    ["Killer Whale (2026) (English)", "https://m.media-amazon.com/images/S/pv-target-images/9e7eb3a74928671ae5b97af3fe8b9ad2b6b0cec0bd4210ec46abedb8428e3400.jpg"],
    ["Love Me Love Me (2026) (Hindi - English)", "https://images2.cinefil.com/movies/1279886.webp"],
    ["Laal Ishq (2016) (Marathi)", "https://cdn1.marathistars.com/wp-content/uploads/2016/04/Laal-Ishq-Movie-Poster-Swapnil-Joshi-Anjana-Sukhani.jpg"],
    ["The Love Hypothesis (2026) (Hindi - English)", "https://myimg.click/images/2026/09/24/The-Love-Hypothesis-2026.jpg"],
    ["Saiyaara (2025) (Hindi)", "https://media5.bollywoodhungama.in/wp-content/uploads/2025/04/Saiyaara-1-1.jpg"],
    ["The Bayou (2025) (Hindi - English)", "https://m.media-amazon.com/images/M/MV5BOGQ5MGVmOWYtN2Y0NS00MWM5LWI1MjItNTI5NDdkNmRiMzkzXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"],
    ["Season of Love AKA Ask Mevsimi (2024) (Hindi - English)", "https://www.paribucineverse.com/files/movie_posters/HO00006234_638392988257363665_ask-mevsimi.png"],
    ["Summer of 69 (2025) (English)", "https://images.justwatch.com/poster/331473072/s718/summer-of-69.jpg"],
    ["Space Wars Quest For The Deepstar (2022) (English)", "https://images.justwatch.com/poster/305065611/s718/space-wars-quest-for-the-deepstar-2023.jpg"],
    ["Love Sex and 30 Candles (2023) (English)", "https://image.tmdb.org/t/p/original/rpMQRqKoDq81m5czp5ZKMOG8NrE.jpg"],
    ["Gharat Ganpati (2024) (Marathi)", "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/gharat-ganpati-et00399543-1727683042.jpg"]
];

const links = [
    "1vrmslmuuqOGu3gq7XQUamCPD4C8XTrny", "1CMrzoZwnGRKLAsuYs_zVy-YDEVf6-fOg",
    "1ttccGE1DJ6iZ0LxkALYfl-ntnsfyNFM_", "14znqcy3ZHm-vIunWqZzW37rCZTRiQpWT",
    "1gTCsUO5Bq5lsrLE-JUlbbPF3BjutyhSv", "18kPHftxw-YT_clMt6Wmwa5aPCmLj4YUU",
    "1H6MB-Z-UTU-bI69YvpNoyv4vzFBvwnsE", "1jMI1KgkvmE0APkOZaNDMrMF3SgBqCEvz",
    "1hSx4URO-97JspzvccqRRzwRC9JzB8Xj2", "140Bypxp3OO3J8A7xpuQl1YAOnXK_s3fQ",
    "1Gc7_u0GD8WcY04uz5m4NXhevVE2DxTA9", "1TLUgoz0Dg3SO4a-VVBpp1ZueUyyZJIOW",
    "1zfmC-Ku-BR5reY4vg1ebltB3vnC8XtYZ", "13Ts5RqXK8GtmQajMl4ni_30egOCyv79w",
    "1krF1qivwOg8rCDBSjEqDB7-g5F1iH8sM", "1r0TvXGnklNIALdNOuiV2IqmTjHNEheD0",
    "1-Wahj_QF5DeA67frgyozagAv_jdAF17M", "https://drive.google.com/file/d/16yZ83BYJjhl9x8pLzNVDp3i2vT9YJM1k/view?usp=sharing",
    "https://drive.google.com/file/d/1Bn6vvF26ECUW6VfpWUGUXEBbg3jXcjQn/view?usp=sharing", "https://drive.google.com/file/d/1xC_eGsKK1-wvYMBSkGX7Z7XtxIGKIRE7/view?usp=sharing",
    "https://drive.google.com/file/d/1zUsr7qV0Qgm7j7PwzWJS6dfOHnCoRLlL/view?usp=sharing", "https://drive.google.com/file/d/18rTlyaA72fk19zp07gsoyyqWFVe4CYaa/view?usp=sharing",
    "https://drive.google.com/file/d/1uSsSRLZ2p24k-xRy3SMXfvSJ_3H-UE8B/view?usp=sharing", "https://drive.google.com/file/d/1pYU-GdwQXLn4fZ6VZiPn-_ws7p91Ceyy/view?usp=sharing",
    "https://drive.google.com/file/d/1LOBu5ttLJPozLip4QyErS3DB9IBVadB0/view?usp=sharing", "https://drive.google.com/file/d/1BWmDZOL7nLoaF4c8ycMcQsH37qtAC-oT/view?usp=sharing",
    "https://drive.google.com/file/d/1Uj_qv0JN9cLS92_jymwqUoR0o9TaGQ3R/view?usp=sharing", "https://drive.google.com/file/d/1b0H8lLbGGHaPrnnN6hPEv8T5C5Qk0don/view?usp=sharing",
    "https://drive.google.com/file/d/1pd5DS5hURSinfw4el_khCW3N-OUom2qL/view?usp=sharing", "https://drive.google.com/file/d/1C-MBxprLhDXWw6e__swDkyweoSWK0Hzo/view?usp=sharing", 
    "https://drive.google.com/file/d/17ZGYCSwLwPAUbcvlX7nqU5sGvJ6u9zXL/view?usp=sharing", "https://drive.google.com/file/d/1lGqdw1MaADmnP5onpC04fLA7WpnYtJAa/view?usp=sharing",
    "https://drive.google.com/file/d/1k3E5jx1TPZMXgfF_UD_e3CVv_IazJXOw/view?usp=sharing", "https://drive.google.com/file/d/1LuycM1rN8KeFon1X7SzgyZB8KBDUnQRI/view?usp=sharing",
    "https://drive.google.com/file/d/1WQ_OqyNKFDTZVqSM_dHn5dnoDdivEk9z/view?usp=sharing","https://drive.google.com/file/d/1F5wEl3cJM0c3mVscBsqlV8zfTqDYZC7F/view?usp=sharing"
];

function normalizeDriveId(value) {
    const id = String(value).match(/\/file\/d\/([^/?]+)/)?.[1];
    return id ?? String(value).trim();
}

const data = Object.fromEntries(links.map((value, index) => {
    const id = normalizeDriveId(value);
    return [`show${index + 1}`, [{ title: "Watch Movie", link: `https://drive.google.com/file/d/${id}/view` }]];
}));

function openShow(show) {
    localStorage.setItem("show", show);
    window.location.href = "episodes.html";
}

const cardList = document.getElementById("movie-cards");
const carousel = document.getElementById("hero-carousel");
if (carousel) {
    const featured = titles
        .map(([name, poster], index) => ({ name, poster, showIndex: index + 1 }))
        .slice(-8)
        .reverse();
    const images = [document.getElementById("carousel-image"), document.getElementById("carousel-image-next")];
    const cover = document.getElementById("carousel-cover");
    const title = document.getElementById("carousel-title");
    const dots = document.getElementById("carousel-dots");
    let activeIndex = 0;
    let activeImageIndex = 0;
    let timer;
    let slideTimer;
    let captionTimer;
    let changeId = 0;
    let hasCover = false;

    dots.innerHTML = featured.map((_, index) => `<button class="carousel-dot" type="button" aria-label="Show movie ${index + 1}" aria-pressed="${index === 0}"></button>`).join("");
    const dotButtons = [...dots.children];
    const showCover = index => {
        activeIndex = (index + featured.length) % featured.length;
        const { name, poster, showIndex } = featured[activeIndex];
        const currentChange = ++changeId;
        window.clearTimeout(slideTimer);
        const swapImage = () => {
            const incomingIndex = hasCover ? 1 - activeImageIndex : activeImageIndex;
            const incoming = images[incomingIndex];
            const outgoing = images[activeImageIndex];
            if (hasCover) {
                images.forEach(layer => layer.classList.remove("is-active", "is-exiting", "is-entering"));
                incoming.src = poster;
                incoming.classList.add("is-entering");
                void incoming.offsetWidth;
                incoming.classList.add("is-active");
                outgoing.classList.add("is-exiting");
            } else {
                incoming.src = poster;
                incoming.classList.add("is-active");
                hasCover = true;
            }
            activeImageIndex = incomingIndex;
            slideTimer = window.setTimeout(() => {
                outgoing.classList.remove("is-exiting");
            }, 850);
        };
        if (hasCover) {
            const preloaded = new Image();
            preloaded.onload = () => { if (currentChange === changeId) swapImage(); };
            preloaded.onerror = () => { if (currentChange === changeId) swapImage(); };
            preloaded.src = poster;
        } else swapImage();
        title.textContent = name.replace(/\s+\(Hindi - English\)$/, "");
        title.classList.remove("is-sliding");
        void title.offsetWidth;
        title.classList.add("is-sliding");
        window.clearTimeout(captionTimer);
        captionTimer = window.setTimeout(() => title.classList.remove("is-sliding"), 450);
        cover.dataset.show = `show${showIndex}`;
        cover.setAttribute("aria-label", `Open ${title.textContent}`);
        dotButtons.forEach((dot, dotIndex) => dot.setAttribute("aria-pressed", String(dotIndex === activeIndex)));
    };
    const startRotation = () => {
        window.clearInterval(timer);
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            timer = window.setInterval(() => showCover(activeIndex + 1, 1), 3000);
        }
    };
    document.getElementById("carousel-prev").addEventListener("click", () => { showCover(activeIndex - 1); startRotation(); });
    document.getElementById("carousel-next").addEventListener("click", () => { showCover(activeIndex + 1); startRotation(); });
    dots.addEventListener("click", event => {
        const dotIndex = dotButtons.indexOf(event.target);
        if (dotIndex >= 0) { showCover(dotIndex); startRotation(); }
    });
    carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
    carousel.addEventListener("mouseleave", startRotation);
    carousel.addEventListener("focusin", () => window.clearInterval(timer));
    carousel.addEventListener("focusout", event => { if (!carousel.contains(event.relatedTarget)) startRotation(); });
    images.forEach(image => {
        image.addEventListener("error", () => { if (image.classList.contains("is-active")) cover.classList.add("cover-unavailable"); });
        image.addEventListener("load", () => { if (image.classList.contains("is-active")) cover.classList.remove("cover-unavailable"); });
    });
    cover.addEventListener("click", () => openShow(cover.dataset.show));
    showCover(0);
    startRotation();
}

if (cardList) {
    cardList.innerHTML = titles
        .map((movie, index) => ({ movie, index }))
        .reverse()
        .map(({ movie: [title, poster], index }) => `
        <button class="card" type="button" data-show="show${index + 1}" aria-label="Open ${title}">
            ${poster ? `<img src="${poster}" alt="" loading="lazy">` : `<span class="poster-fallback" aria-hidden="true">${title.split(" ").slice(0, 2).map(word => word[0]).join("")}</span>`}
            <span class="card-overlay"><span class="card-title">${title}</span><span class="card-play" aria-hidden="true">▶</span></span>
        </button>`)
        .join("");

    const cards = [...cardList.children];
    const searchInput = document.getElementById("movie-search");
    const emptyMessage = document.getElementById("search-empty");
    const titleCount = document.querySelector(".title-count");
    const searchWrap = document.getElementById("search-wrap");
    const searchResults = document.getElementById("search-results");
    let activeResult = -1;

    const closeSearchResults = () => {
        searchResults.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
        searchInput.removeAttribute("aria-activedescendant");
        activeResult = -1;
    };
    const renderSearchResults = query => {
        searchResults.replaceChildren();
        activeResult = -1;
        searchInput.removeAttribute("aria-activedescendant");
        if (!query) return closeSearchResults();

        const matches = titles
            .map(([name, poster], index) => ({ name, poster, index }))
            .filter(movie => movie.name.toLocaleLowerCase().includes(query))
            .slice(0, 6);

        if (!matches.length) {
            const empty = document.createElement("p");
            empty.className = "search-result-empty";
            empty.textContent = "No matching movies. Try another title.";
            searchResults.append(empty);
        } else {
            matches.forEach(({ name, poster, index }, resultIndex) => {
                const option = document.createElement("button");
                option.type = "button";
                option.className = "search-result";
                option.id = `search-result-${index + 1}`;
                option.setAttribute("role", "option");
                option.setAttribute("aria-selected", "false");
                option.dataset.show = `show${index + 1}`;
                const artwork = document.createElement(poster ? "img" : "span");
                artwork.className = "search-result-art";
                if (poster) {
                    artwork.src = poster;
                    artwork.alt = "";
                    artwork.loading = "lazy";
                    artwork.addEventListener("error", () => {
                        const fallback = document.createElement("span");
                        fallback.className = "search-result-art search-result-fallback";
                        fallback.textContent = name.split(" ").slice(0, 2).map(word => word[0]).join("");
                        artwork.replaceWith(fallback);
                    }, { once: true });
                } else {
                    artwork.classList.add("search-result-fallback");
                    artwork.textContent = name.split(" ").slice(0, 2).map(word => word[0]).join("");
                }
                const details = document.createElement("span");
                details.className = "search-result-copy";
                const movieTitle = document.createElement("strong");
                movieTitle.textContent = name.replace(/\s+\(Hindi - English\)$/, "");
                const metadata = document.createElement("small");
                const year = name.match(/\((\d{4})\)/)?.[1];
                metadata.textContent = year ? `FEATURE FILM · ${year}` : "FEATURE FILM";
                const action = document.createElement("span");
                action.className = "search-result-arrow";
                action.setAttribute("aria-hidden", "true");
                action.textContent = "↗";
                details.append(movieTitle, metadata);
                option.append(artwork, details, action);
                searchResults.append(option);
            });
        }
        searchResults.hidden = false;
        searchInput.setAttribute("aria-expanded", "true");
    };

    const updateSearch = () => {
        const query = searchInput.value.trim().toLocaleLowerCase();
        const visible = cards.filter(card => {
            const matches = card.querySelector(".card-title").textContent.toLocaleLowerCase().includes(query);
            card.hidden = !matches;
            return matches;
        }).length;
        emptyMessage.hidden = visible > 0;
        titleCount.textContent = query ? `${visible} of ${cards.length} titles` : `${cards.length} titles`;
        renderSearchResults(query);
    };
    searchInput.addEventListener("input", updateSearch);
    searchInput.addEventListener("keydown", event => {
        const results = [...searchResults.querySelectorAll("[role=option]")];
        if (event.key === "Escape") return closeSearchResults();
        if (!results.length) return;
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            const step = event.key === "ArrowDown" ? 1 : -1;
            activeResult = (activeResult + step + results.length) % results.length;
            results.forEach((result, index) => result.setAttribute("aria-selected", String(index === activeResult)));
            searchInput.setAttribute("aria-activedescendant", results[activeResult].id);
        } else if (event.key === "Enter" && activeResult >= 0) {
            event.preventDefault();
            openShow(results[activeResult].dataset.show);
        }
    });
    searchResults.addEventListener("click", event => {
        const result = event.target.closest("[data-show]");
        if (result) openShow(result.dataset.show);
    });
    document.addEventListener("click", event => {
        if (!searchWrap.contains(event.target)) closeSearchResults();
    });
    cardList.addEventListener("error", event => {
        if (event.target.tagName !== "IMG") return;
        const fallback = document.createElement("span");
        fallback.className = "poster-fallback";
        fallback.setAttribute("aria-hidden", "true");
        fallback.textContent = event.target.closest(".card").querySelector(".card-title").textContent.split(" ").slice(0, 2).map(word => word[0]).join("");
        event.target.replaceWith(fallback);
    }, true);
    cardList.addEventListener("click", event => {
        const card = event.target.closest("[data-show]");
        if (card) openShow(card.dataset.show);
    });
    updateSearch();
}

const episodes = document.getElementById("episodes-container");
if (episodes) {
    const show = localStorage.getItem("show");
    const showIndex = Number(show?.slice(4)) - 1;
    const [title, poster] = titles[showIndex] ?? [];
    const selected = data[show]?.[0];
    if (selected) {
        const language = title.match(/\((Hindi|English|German)(?:\s*-\s*(?:Hindi|English|German))*\)$/i)?.[0]?.slice(1, -1).replace(/\s*-\s*/g, " · ");
        const displayTitle = title.replace(/\s+\(\d{4}\)/, "").replace(/\s+\((?:Hindi|English|German)(?:\s*-\s*(?:Hindi|English|German))*\)$/i, "");
        document.getElementById("selected-title").textContent = displayTitle;
        document.title = `${displayTitle} — VedantFlix`;
        const posterImage = document.getElementById("detail-poster");
        const fallback = document.getElementById("detail-poster-fallback");
        const backdrop = document.getElementById("detail-backdrop");
        const year = title.match(/\((\d{4})\)/)?.[1];
        const meta = document.getElementById("detail-meta");
        meta.replaceChildren();
        ["FEATURE FILM", year || "VEDANTFLIX", language || "VEDANTFLIX"].forEach((label, index) => {
            if (index) {
                const divider = document.createElement("i");
                meta.append(divider);
            }
            const item = document.createElement("span");
            item.textContent = label;
            meta.append(item);
        });
        const showFallback = () => {
            posterImage.hidden = true;
            fallback.hidden = false;
            fallback.textContent = displayTitle.split(" ").slice(0, 2).map(word => word[0]).join("");
            backdrop.classList.add("no-poster");
        };
        if (poster) {
            posterImage.src = poster;
            backdrop.style.backgroundImage = `url("${poster}")`;
            posterImage.addEventListener("error", showFallback, { once: true });
        } else showFallback();

        document.getElementById("detail-play").addEventListener("click", () => {
            localStorage.setItem("videoId", normalizeDriveId(links[showIndex]));
            window.location.href = "player.html";
        });

        const recommendations = titles.map((movie, index) => ({ movie, index })).reverse().filter(item => item.index !== showIndex);
        recommendations.forEach(({ movie: [movieTitle, moviePoster], index }) => {
            const card = document.createElement("button");
            card.className = "trend-card";
            card.type = "button";
            card.dataset.show = `show${index + 1}`;
            card.setAttribute("aria-label", `Open ${movieTitle}`);
            if (moviePoster) {
                const image = document.createElement("img");
                image.src = moviePoster;
                image.alt = `${movieTitle} poster`;
                image.loading = "lazy";
                image.addEventListener("error", () => image.remove(), { once: true });
                card.append(image);
            }
            const shade = document.createElement("span");
            shade.className = "trend-card-shade";
            const caption = document.createElement("span");
            caption.className = "trend-card-title";
            caption.textContent = movieTitle.replace(/\s+\(\d{4}\)/, "").replace(/\s+\((?:Hindi|English|German)(?:\s*-\s*(?:Hindi|English|German))*\)$/i, "");
            card.append(shade, caption);
            episodes.append(card);
        });
        episodes.addEventListener("click", event => {
            const card = event.target.closest("[data-show]");
            if (card) openShow(card.dataset.show);
        });
    } else {
        document.getElementById("selected-title").textContent = "Your next watch is waiting";
        document.getElementById("detail-poster").hidden = true;
        document.getElementById("detail-poster-fallback").hidden = false;
        document.getElementById("detail-poster-fallback").textContent = "VF";
        document.getElementById("detail-play").hidden = true;
        document.getElementById("detail-meta").hidden = true;
        titles.slice().reverse().forEach(([movieTitle, moviePoster], reverseIndex) => {
            const index = titles.length - reverseIndex - 1;
            const card = document.createElement("button");
            card.className = "trend-card";
            card.type = "button";
            card.dataset.show = `show${index + 1}`;
            card.setAttribute("aria-label", `Open ${movieTitle}`);
            if (moviePoster) {
                const image = document.createElement("img");
                image.src = moviePoster;
                image.alt = `${movieTitle} poster`;
                image.loading = "lazy";
                card.append(image);
            }
            const shade = document.createElement("span");
            shade.className = "trend-card-shade";
            const caption = document.createElement("span");
            caption.className = "trend-card-title";
            caption.textContent = movieTitle.replace(/\s+\(\d{4}\)/, "").replace(/\s+\((?:Hindi|English|German)(?:\s*-\s*(?:Hindi|English|German))*\)$/i, "");
            card.append(shade, caption);
            episodes.append(card);
        });
        episodes.addEventListener("click", event => {
            const card = event.target.closest("[data-show]");
            if (card) openShow(card.dataset.show);
        });
    }
}
