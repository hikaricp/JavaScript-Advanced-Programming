function assignHandler() {
    let element = document.getElementById('someElement');
    let id = element.id;

    element.onClick = () => console.log(id);

    element = null;
}