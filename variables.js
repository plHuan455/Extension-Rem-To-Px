class RemToPxProgram {
  #inputEle;
  #resultEle;
  #btnEle;
  #xWithEle;

  constructor (inputSel, resultSel, xWithSel, btnSel){
    this.#inputEle = document.querySelector(inputSel);
    this.#resultEle = document.querySelector(resultSel);
    this.#btnEle = document.querySelector(btnSel);
    this.#xWithEle = document.querySelector(xWithSel);
  }

  #init(){
    try{
      this.#inputEle.select();

      this.#btnEle.addEventListener('click', ()=>{
        this.#handleBtnClick();
      });

      this.#inputEle.addEventListener('keypress', (e)=>{
        this.#handleInputPress(e.key);
      })

    }catch(err){
      this.#handleError(err);
    }
  }

  run(){
    this.#init();
  }

  #handleBtnClick(){
    const inputVal = this.#handleProcessInputValue(this.#inputEle.value);
    this.#resultEle.value = inputVal * Number(this.#xWithEle.textContent);
  }

  #handleInputPress(key){
    if(key === 'Enter') {
      this.#btnEle.click();
    }
  }

  #handleError(err){
    console.error(err);
  }

  #handleProcessInputValue(value){
    if(value[0] === '0'){
      return Number(`0.${value.slice(1)}`)
    }
    
    return Number(value);
  }
}
