let code = document.getElementById("codes");
let result = document.getElementById("result");
code.addEventListener("input", () =>{
  console.log(code.value);
  result.innerHTML = code.value;
});
{/* <section class="code">
<div class="container">
  <div class="code__inner">
    <div id="code">
      <textarea  id="codes" cols="30" rows="10"></textarea>
    </div>
    <div id="result"></div>
  </div>
</div>
</section>  */}