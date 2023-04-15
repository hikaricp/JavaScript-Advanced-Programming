function assignHandler() {
    let element = document.getElementById('someElement');
    element.onClick = () => console.log(element.id);
}