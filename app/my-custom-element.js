//Making prototypes...
const prototype = Object.create(HTMLElement.prototype);
//Adding name
prototype.name = 'Thumbs Up';
//Adding Methods...
prototype.alert = () => { console.log('This is ' + this.name); }
//Create Callback...
prototype.createdCallback = function() {
    let template = document.querySelector('#my-thumbs-up');
    let clone = document.importNode(template.content, true);
    this.appendChild(clone);
    console.log('Thumbs up has been created' + this);
};
//Adding event listener to onClick function...
// prototype.onclick = function() {
//     console.log('Somebody clicked');
// }
//Adding Object to the methods...
console.log(document.registerElement('x-thumbs-up', {
    prototype: prototype
}));

