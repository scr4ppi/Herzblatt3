// main.js - Herzblatt Logik

document.addEventListener("DOMContentLoaded", () => {

  // --- 1. Speisekarten Logik (nur auf karte.html) ---
  const menuContainer = document.getElementById("menuContainer");
  if (menuContainer) {
    
    // Die erweiterte Karte mit Kölschen Klassikern und neuen Drinks
    const menuData = {
      // DRINKS
      getraenke: [
        { name: "Gaffel Fassbrause", desc: "Zitrone oder Apfel (0,33 l)", price: "3,20 €" },
        { name: "Fritz Kola / Limonaden", desc: "Kola, Kola ohne Zucker, Orange, Zitrone (0,33 l)", price: "3,20 €" },
        { name: "Hausgemachte Limo", desc: "Gurke-Minze oder Rhabarber-Rosmarin", price: "4,50 €" },
        { name: "Schamong Filterkaffee", desc: "Feinste Kölner Röstung, immer frisch", price: "2,80 €" },
        { name: "Frischer Minztee", desc: "Mit Ingwer und etwas Honig", price: "3,50 €" }
      ],
      spritz: [
        { name: "Herzblatt Spritz", desc: "Unser Signature Aperitif, Prosecco, Soda, frische Orange", price: "7,50 €" },
        { name: "Rhing-Spritz", desc: "Rhabarbernektar, Lillet Blanc, Prosecco", price: "8,00 €" },
        { name: "Aperol Spritz", desc: "Der Klassiker", price: "7,50 €" },
        { name: "Limoncello Spritz", desc: "Limoncello, Prosecco, Soda, Zitrone", price: "8,00 €" }
      ],
      bier: [
        { name: "Nolte Helles vom Fass", desc: "0,3 l - Süffig und kalt", price: "3,50 €" },
        { name: "Nolte Helles vom Fass", desc: "0,5 l - Für den großen Durst", price: "5,20 €" },
        { name: "Nolte Pils", desc: "0,33 l (Flasche)", price: "3,60 €" },
        { name: "Nolte Radler", desc: "0,33 l (Flasche)", price: "3,60 €" },
        { name: "Herrengedeck", desc: "Ein Nolte Helles (0,3 l) und ein Sünner Korn (2 cl)", price: "5,50 €" }
      ],
      longdrinks: [
        { name: "Ehrenfeld Mule", desc: "Wodka, Spicy Ginger, frische Limette, Gurke", price: "9,00 €" },
        { name: "Gin Tonic (Kölsch)", desc: "Gin de Cologne, Tonic Water, Zitronenzeste", price: "10,50 €" },
        { name: "Cuba Libre", desc: "Brauner Rum, Limette, Fritz Kola", price: "8,50 €" },
        { name: "Dark & Stormy", desc: "Goslings Rum, Spicy Ginger, Limette", price: "9,00 €" }
      ],
      cocktails: [
        { name: "Melon Sour", desc: "Melonenlikör, frischer Zitronensaft, Sirup (Klassisch ohne Eiweiß)", price: "9,50 €" },
        { name: "Veedel Margarita", desc: "Tequila, Limette, Agave, mit hausgemachtem Himbeer-Salzrand", price: "10,00 €" },
        { name: "Matcha Highball", desc: "Gin, Matcha, Yuzu, Tonic Water", price: "10,50 €" },
        { name: "Basil Smash", desc: "Gin, frischer Basilikum, Zitrone, Zuckersirup", price: "9,50 €" },
        { name: "Espresso Martini", desc: "Wodka, Kaffeelikör, frisch gebrühter Schamong Espresso", price: "10,00 €" }
      ],

      // FOOD
      kleinigkeiten: [
        { name: "Himmel un Ääd Kroketten", desc: "Fluffige Kartoffel-Apfel-Kroketten mit veganer 'Flönz'-Mayo", price: "9,50 €", vegan: true },
        { name: "Halver Hahn", desc: "Frisches Röggelchen, alter Gouda, Zwiebeln, Römersenf", price: "7,50 €" },
        { name: "Mettbrötchen 2.0", desc: "Hausgemachtes veganes Reis-Mett, rote Zwiebeln, Landbrot", price: "7,50 €", vegan: true },
        { name: "Warme Oliven", desc: "In Zitronenöl und Knoblauch mariniert, dazu Landbrot", price: "5,50 €", vegan: true }
      ],
      hauptgerichte: [
        { name: "Herzblatt Smashburger", desc: "Zwei Patties, Cheddar, Brioche, hausgemachte Soße, dazu Fries", price: "15,50 €" },
        { name: "Rheinischer Sauerbraten-Taco", desc: "Zartes Pulled Jackfruit im Sauerbraten-Sud, Rotkohl-Slaw, weicher Taco", price: "13,50 €", vegan: true },
        { name: "Brauhaus-Schnitzel", desc: "Vom Schwein, Wiener Art, mit lauwarmem Kartoffel-Gurken-Salat", price: "16,90 €" }
      ],
      vegan: [
        { name: "Beyond Smashburger", desc: "Beyond Meat Patties, veganer Käse, Brioche, Spezialsoße, Fries", price: "16,50 €", vegan: true },
        { name: "Vegane Mezze-Platte", desc: "Hausgemachter Hummus, Auberginencreme, Oliven, warmes Fladenbrot", price: "14,90 €", vegan: true },
        { name: "Knusper-Kartoffeln", desc: "Mit Rosmarin, Meersalz und veganer Knoblauch-Kräutercreme", price: "8,90 €", vegan: true },
        { name: "Sauerbraten-Taco", desc: "Pulled Jackfruit im Sauerbraten-Sud, Rotkohl-Slaw, weicher Taco", price: "13,50 €", vegan: true }
      ],
      dessert: [
        { name: "Armer Ritter 'Ehrenfeld'", desc: "Brioche in Zimt gebraten, dazu Bourbon-Vanilleeis und Beeren", price: "6,90 €" },
        { name: "Veganes Schoko-Mousse", desc: "Mit Avocado und dunkler Schokolade, dazu Krokant", price: "7,50 €", vegan: true }
      ]
    };

    const menuTabs = document.querySelectorAll(".tab-btn");

    function renderMenu(category) {
      if(!menuData[category]) return;

      // HIER GEFIXT: Das h3 Tag hat jetzt style="... color: var(--white); ..."
      menuContainer.innerHTML = menuData[category].map(item => `
        <article style="display:flex; justify-content:space-between; padding: 16px; border-bottom: 1px solid rgba(255,255,255,0.1);">
          <div>
            <h3 style="font-size:1.1rem; margin-bottom:4px; color:var(--white);">${item.name}${item.vegan ? '<span style="margin-left:8px; font-size:0.7rem; background:rgba(199,234,192,0.2); color:#d8ffd0; padding:2px 6px; border-radius:4px; font-weight:bold; letter-spacing:0.05em; text-transform:uppercase;">vegan</span>' : ''}</h3>
            <p style="color:rgba(255,255,255,0.7); font-size:0.9rem; max-width:85%;">${item.desc}</p>
          </div>
          <div style="color:#c7a56b; font-weight:bold; font-size:1.1rem; padding-left:12px; white-space:nowrap;">${item.price}</div>
        </article>
      `).join("");
    }

    menuTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Tab-Styling umschalten
        menuTabs.forEach(t => {
          t.classList.remove("active");
          t.style.background = "transparent";
          t.style.color = "white";
        });
        tab.classList.add("active");
        tab.style.background = "var(--beige-soft)";
        tab.style.color = "var(--blue)";
        
        // Karte rendern
        renderMenu(tab.dataset.menu);
      });
    });

    // Start-Kategorie laden
    renderMenu("getraenke");
  }


  // --- 2. Galerie Lightbox Logik (nur auf galerie.html) ---
  const overlay = document.getElementById("galleryOverlay");
  if (overlay) {
    const galleryData = {
      bar: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1582222137916-2fb91e0a2935?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1500&q=85"
      ],
      food: [
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1520218508822-998633d99765?auto=format&fit=crop&w=1500&q=85"
      ],
      drinks: [
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1500&q=85"
      ],
      hinterhof: [
        "https://images.unsplash.com/photo-1600891963935-9e3ecf46e8b3?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1533481405265-e9ce0c044abb?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=85"
      ],
      events: [
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1500&q=85",
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1500&q=85"
      ]
    };

    const imgDisplay = document.getElementById("galleryImgDisplay");
    let activeCat = "", activeIdx = 0;

    document.querySelectorAll(".gal-card").forEach(card => {
      card.addEventListener("click", () => {
        activeCat = card.getAttribute("data-gallery");
        activeIdx = 0;
        if(galleryData[activeCat] && galleryData[activeCat].length > 0) {
          imgDisplay.src = galleryData[activeCat][activeIdx];
          overlay.style.display = "flex";
        }
      });
    });

    const nextBtn = document.getElementById("nextGalleryBtn");
    const prevBtn = document.getElementById("prevGalleryBtn");

    if(nextBtn && prevBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const arr = galleryData[activeCat];
        activeIdx = (activeIdx + 1) % arr.length;
        imgDisplay.src = arr[activeIdx];
      });

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const arr = galleryData[activeCat];
        activeIdx = (activeIdx - 1 + arr.length) % arr.length;
        imgDisplay.src = arr[activeIdx];
      });
    }

    document.getElementById("closeGalleryBtn").addEventListener("click", () => {
      overlay.style.display = "none";
      setTimeout(() => { imgDisplay.src = ""; }, 200);
    });
  }

});