window.onload = function () {
  
  // FUNÇÃO PARA O BOTÃO ENTRAR
  const warning = document.getElementById('button-login');
  const email = document.getElementById('user-email-phone');
  
  warning.addEventListener('click', function () {
    if (email.value === '') {
      alert("Campo Email ou Telefone invalido")
    } else {
      alert(email.value);
    }
  })

  // FUNÇÃO PARA GENERO PERSONALIZADO

  const gender = document.getElementById("custom");
  const mas = document.getElementById("mas");
  const fem = document.getElementById("fem");
  const divCustom = document.getElementById("div-custom");

  gender.addEventListener('click', function() {
    divCustom.className="show";
  })

  mas.addEventListener('click', function() {
    divCustom.className="hide";
  })

  fem.addEventListener('click', function() {
    divCustom.className="hide";
  })
 
   
  

  // // FUNÇÃO BOTÃO CADASTRAR

  const button = document.getElementById('facebook-register');
  
  
  button.addEventListener('click', function (){
    const first = document.querySelector('#first').value;
    const last = document.querySelector('#last').value;
    const email = document.querySelector('#cel-email').value;
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
 
    if (first !== '' || last !== '' || email !== '') {
    const after = document.getElementById("after-submit");
    after.className="hide";

    const before = document.getElementById("before-submit");
    before.className="show";

    
    
    
    const welcome = document.getElementById('before-submit');
    welcome.className="welcome"
    welcome.innerText = `Ola ${first} ${last}.
    Suas informações são:
    Email -  ${email};
    Data de nascimento - ${day} de ${month} de ${year} `
 }
  });

  //data em select
  const day = ["Dia","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  const daySelect = document.querySelector("#day");
  day.forEach((day) => {
    const optionDay = new Option(day, day);
    daySelect.appendChild(optionDay);
  });

  const month = ["Mês","Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Outubro", "Novembro", "Dezembro"];
  const monthSelect = document.querySelector("#month");
  month.forEach((month) => {
    const optionMonth = new Option(month, month);
    monthSelect.appendChild(optionMonth);
  });

  const year = ["Ano", "2020","2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1995", "1994", "1993", "1992", "1991", "1990"];
  const yearSelect = document.querySelector("#year");
  year.forEach((year) => {
    const optionYear = new Option(year, year);
    yearSelect.appendChild(optionYear);
  });

  //footer

  const languages = ["Português (Brasil)"," Español ", "English(US)", "Français (France)", "中文 (简体)", "العربية", "Italiano", "한국어", "Deutsch", " हिन्दी  ", "日本語 "];
  const languagesDiv = document.querySelector(".idiomas");
  languages.forEach((languages) => {
    const languagesP = document.createElement('p');
    languagesP.innerHTML = languages;
    languagesDiv.appendChild(languagesP);
  });

  const br = document.querySelectorAll("p");
  br[3].className="br"

  const extras = ['Cadastre-se  ','Entrar ', '   Messenger','  FacebookLite','  Watch','  Pessoas ','  Páginas','  Categorias de Página',' Locais','  Jogos' ,'  Locais' ,'  Marketplace'  ,'  Facebook Pay','  Grupos' ,'  Vagas de Emprego',' Oculus' ,'  Portal'  ,'  Instagram','  Local','  Campanhas de arrecadação de fundos','  Serviços','  Central de Informações de Votação','  Sobre','  Criar anúncio','  Criar Página','  Desenvolvedores','  Carreiras','  Privacidade','  Cookies','  Escolhas para anúncios','  Termos','  Ajuda'];

  const extraDiv = document.querySelector(".extra");
  extras.forEach((extras) => {
    const extraP = document.createElement('a');
    extraP.innerHTML = extras;
    extraDiv.appendChild(extraP);
  });
};

