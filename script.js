const inputElement = (type, name, title, placeholder, id, divid, labelid) => {

    return `
        <div id ='${divid}'>
            <input type='${type}' name='${name}' placeholder='${placeholder}' id='${id}'>
            <label id = '${labelid}'>${title}</label>
        </div>
    `;
}


const formElement = `
    <form id='form'>
        ${inputElement('text', 'firstName', '', 'Név', 'name', 'egy', 'labelone')}
        ${inputElement('email', 'personalEmail', '', 'Email cím', 'email', 'kettő', 'labeltwo')}
        ${inputElement('checkbox', 'terms', 'Elolvastam és elfogadom az Adatkezelési Tájékoztatót', '', 'box', 'három', 'labelthree')}
        <button>ELKÜLD</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(et);
    et.classList.add('submitted');
}


function loadEvent() {
   const root = document.getElementById('root')
   root.insertAdjacentHTML('afterbegin', formElement)

   const form = document.getElementById('form')
   form.addEventListener('submit', formSubmit)

   const inputList = form.querySelectorAll('input');
}

window.addEventListener("load", loadEvent);