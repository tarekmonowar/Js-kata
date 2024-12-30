function getName(value){
    alert(localStorage.getItem(value));
};

function localS (name,value){
  localStorage.setItem(name,value);
}