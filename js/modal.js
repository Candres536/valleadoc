const openModal1 = document.querySelector('.kinder');
const openModal2 = document.querySelector('.primer-ciclo');
const openModal3 = document.querySelector('.segundo-ciclo');
const openModal4 = document.querySelector('.tercer-ciclo');
const openModal5 = document.querySelector('.bachiller');


const modal1 = document.getElementById("modal-1");
const modal2 = document.getElementById("modal-2");
const modal3 = document.getElementById("modal-3");
const modal4 = document.getElementById("modal-4");
const modal5 = document.getElementById("modal-5");

const closeModal1 = document.querySelector(".modal-close");
const closeModal2 = document.querySelector(".modal-close2");
const closeModal3 = document.querySelector(".modal-close3");
const closeModal4 = document.querySelector(".modal-close4");
const closeModal5 = document.querySelector(".modal-close5");




 openModal1.addEventListener('click', ()=>{
    modal1.classList.add('modal--show');
 });

 closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    modal1.classList.remove('modal--show');
 });








 openModal2.addEventListener('click', ()=>{
    modal2.classList.add('modal--show');
 });

 closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modal2.classList.remove('modal--show');
 });








 openModal3.addEventListener('click', ()=>{
    modal3.classList.add('modal--show');
 });

 closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    modal3.classList.remove('modal--show');
 });






 openModal4.addEventListener('click', ()=>{
    modal4.classList.add('modal--show');
 });

 closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    modal4.classList.remove('modal--show');
 });







 openModal5.addEventListener('click', ()=>{
    modal5.classList.add('modal--show');
 });

 closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    modal5.classList.remove('modal--show');
 });


