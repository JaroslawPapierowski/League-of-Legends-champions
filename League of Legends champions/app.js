// Utwórz funkcję pobierającą dane z tablicy API
async function getData() {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json');
    const data = await response.json();
    const champions = Object.values(data.data);
    const body = document.getElementById("body");
  
    for (let i = 0; i < champions.length; i++) {
      const div = document.createElement("div");
      div.classList.add("champion");
        
      // Dodaj obrazek postaci z odpowiednim borderem na podstawie roli
      const img = document.createElement("img");
      img.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champions[i].id + "_0.jpg");
      img.classList.add("splash");
      switch(champions[i].tags[0]) {
        case "Fighter":
          img.classList.add("border-top");
          break;
        case "Assassin":
          img.classList.add("border-jungle");
          break;
        case "Mage":
          img.classList.add("border-mid");
          break;
        case "Marksman":
          img.classList.add("border-adc");
          break;
        case "Support":
          img.classList.add("border-support");
          break;
        case "Tank":
          img.classList.add("border-support");
          break;
      }
      div.appendChild(img);
  
      // Dodaj nazwę postaci i jej rolę
      const h1 = document.createElement("h1");
      h1.innerHTML = champions[i].name;
      div.appendChild(h1);
  
      const p = document.createElement("p");
      p.innerHTML = champions[i].tags.join(', ');
      div.appendChild(p);
  
      body.appendChild(div);
    }
  }
  
  // Wywołaj funkcję getData()
  getData();