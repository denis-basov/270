/**
 * асинхронная функция для получения данных о странах
 */
let country = "russia";
let countries = document.querySelector(".countries");

// функция отображения данных
function showCountry(data) {
  // let borders = "";
  // if (data.borders) {
  //   borders = data.borders.join(", ");
  // } else {
  //   borders = "Граничащих стран нет";
  // }

  let output = `
            <div class="country">
              <div class="images">
                <img src="${data.coatOfArms.svg}" alt="Герб страны ${data.translations.rus.official}">
                <img src="${data.flags.svg}" alt="${data.flags.alt}">
              </div>
              <h2>${data.translations.rus.official}</h2>
              <h3>Площадь: ${data.area} км/кв</h3>
              <p>Столица: ${data.capital[0]}</p>
              <p>Население: ${data.population} чел</p>
              <p>Регион: ${data.region ?? "регион неизвестен"}</p>
              <p>Граничащие страны: ${data.borders ? data.borders.join(", ") : "Граничащих стран нет"}</p>
            </div>`;

  countries.insertAdjacentHTML("beforeend", output);
}

// функция получения данных остране
async function whereIAm(country) {
  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  let data = await response.json();

  showCountry(data[0]);
}

whereIAm("australia");
whereIAm(country);
whereIAm("peru");
whereIAm("germany");
