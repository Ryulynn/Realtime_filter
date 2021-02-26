$(document).ready(function(){
  let get_input = document.getElementById("input_text");//inputタグの要素を取得
  
  get_input.oninput = function(){//フォーム内容に変更があった時に実行
  
    let input_value = get_input.value;//フォームの入力内容を取得
    let input_length = input_value.length;//入力内容の文字数を取得
    console.log(input_length);
    console.log($(".keyword_meat3").text().length);
    let input_value_conversion = input_value.replace(/[Ａ-Ｚａ-ｚ]/g, function(s){//全角英数字を半角に変換
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);  
    });
    function keywordConversion(keywordClass){//キーワードをフォームに入力された文字数分取得する関数
      return $(keywordClass).text().substr(0,input_length);//(入力された文字数に関わらず、入力文字列とキーワードを比較し判定するため)
    }　　　　　　　　　　　　　　　　　　//(例えばキーワードnikuに対して、入力文字数１文字では「n」、入力文字数２文字では「ni」となる)
    
    //肉のリアルタイムフィルター
    let meat1 = keywordConversion(".keyword_meat1");//キーワードの入力文字数分取得
    let meat2 = keywordConversion(".keyword_meat2");
    let meat3 = keywordConversion(".keyword_meat3");
    let meat4 = keywordConversion(".keyword_meat4");
    
    if(get_input.value == ""){//フォームに何も入力されていない場合の処理
      $(".meat").removeClass("hidden");//表示する
    }else if(input_value_conversion.includes(meat1) == true //フォームに入力された文字列とキーワードが一致する場合の処理。
              || input_value_conversion.includes(meat2) == true 
              || input_value_conversion.includes(meat3) == true
              || input_value_conversion.includes(meat4) == true){
      $(".meat").removeClass("hidden");//表示する
    }else{//それ以外の入力に対する処理
      $(".meat").addClass("hidden");//表示を消す
    }
    if($(".keyword_meat3").text().length < input_length){//入力文字数がキーワードの最大文字数(この場合は「niku」で４)より大きい場合の処理
      $(".meat").addClass("hidden");//表示を消す
    }
    
    
    //魚のリアルタイムフィルター
    let fish1 = keywordConversion(".keyword_fish1");//キーワードの入力文字数分取得
    let fish2 = keywordConversion(".keyword_fish2");
    let fish3 = keywordConversion(".keyword_fish3");
    let fish4 = keywordConversion(".keyword_fish4");
    let fish5 = keywordConversion(".keyword_fish5");
    
    if(get_input.value == ""){
      $(".fish").removeClass("hidden");
    }else if(input_value_conversion.includes(fish1) == true 
              || input_value_conversion.includes(fish2) == true
              || input_value_conversion.includes(fish3) == true
              || input_value_conversion.includes(fish4) == true
              || input_value_conversion.includes(fish5) == true){
      $(".fish").removeClass("hidden");
    }else{
      $(".fish").addClass("hidden");
    }
    if($(".keyword_fish3").text().length < input_length){
      $(".fish").addClass("hidden");
    }
    
    //野菜のリアルタイムフィルター
    let vegetable1 = keywordConversion(".keyword_vegetable1");//キーワードの入力文字数分取得
    let vegetable2 = keywordConversion(".keyword_vegetable2");
    let vegetable3 = keywordConversion(".keyword_vegetable3");
    let vegetable4 = keywordConversion(".keyword_vegetable4");
    
    if(get_input.value == ""){
      $(".vegetable").removeClass("hidden");
    }else if(input_value_conversion.includes(vegetable1) == true 
              || input_value_conversion.includes(vegetable2) == true 
              || input_value_conversion.includes(vegetable3) == true
              || input_value_conversion.includes(vegetable4) == true){
      $(".vegetable").removeClass("hidden");
    }else{
      $(".vegetable").addClass("hidden");
    }
    if($(".keyword_vegetable3").text().length < input_length){
      $(".vegetable").addClass("hidden");
    }
    
    // 焼き肉のリアルタイムフィルター
    let yakiniku1 = keywordConversion(".keyword_yakiniku1");//キーワードの入力文字数分取得
    let yakiniku2 = keywordConversion(".keyword_yakiniku2");
    let yakiniku3 = keywordConversion(".keyword_yakiniku3");
    let yakiniku4 = keywordConversion(".keyword_yakiniku4");
    let yakiniku5 = keywordConversion(".keyword_yakiniku5");
    let yakiniku6 = keywordConversion(".keyword_yakiniku6");
    
    if(get_input.value == ""){
      $(".yakiniku").removeClass("hidden");
    }else if(input_value_conversion.includes(yakiniku1) == true 
              || input_value_conversion.includes(yakiniku2) == true 
              || input_value_conversion.includes(yakiniku3) == true
              || input_value_conversion.includes(yakiniku4) == true
              || input_value_conversion.includes(yakiniku5) == true
              || input_value_conversion.includes(yakiniku6) == true){
      $(".yakiniku").removeClass("hidden");
    }else{
      $(".yakiniku").addClass("hidden");
    }
    if($(".keyword_yakiniku3").text().length < input_length){
      $(".yakiniku").addClass("hidden");
    }
    
    // 刺し身のリアルタイムフィルター
    let sasimi1 = keywordConversion(".keyword_sasimi1");//キーワードの入力文字数分取得
    let sasimi2 = keywordConversion(".keyword_sasimi2");
    let sasimi3 = keywordConversion(".keyword_sasimi3");
    let sasimi4 = keywordConversion(".keyword_sasimi4");
    let sasimi5 = keywordConversion(".keyword_sasimi5");
    
    if(get_input.value == ""){
      $(".sasimi").removeClass("hidden");
    }else if(input_value_conversion.includes(sasimi1) == true 
              || input_value_conversion.includes(sasimi2) == true 
              || input_value_conversion.includes(sasimi3) == true
              || input_value_conversion.includes(sasimi4) == true
              || input_value_conversion.includes(sasimi5) == true){
      $(".sasimi").removeClass("hidden");
    }else{
      $(".sasimi").addClass("hidden");
    }
    if($(".keyword_sasimi3").text().length < input_length){
      $(".sasimi").addClass("hidden");
    }
    
    // 野菜炒めのリアルタイムフィルター
    let yasaiitame1 = keywordConversion(".keyword_yasaiitame1");//キーワードの入力文字数分取得
    let yasaiitame2 = keywordConversion(".keyword_yasaiitame2");
    let yasaiitame3 = keywordConversion(".keyword_yasaiitame3");
    let yasaiitame4 = keywordConversion(".keyword_yasaiitame4");
    let yasaiitame5 = keywordConversion(".keyword_yasaiitame5");
    let yasaiitame6 = keywordConversion(".keyword_yasaiitame6");
    
    if(get_input.value == ""){
      $(".yasaiitame").removeClass("hidden");
    }else if(input_value_conversion.includes(yasaiitame1) == true 
              || input_value_conversion.includes(yasaiitame2) == true 
              || input_value_conversion.includes(yasaiitame3) == true
              || input_value_conversion.includes(yasaiitame4) == true
              || input_value_conversion.includes(yasaiitame5) == true
              || input_value_conversion.includes(yasaiitame6) == true){
      $(".yasaiitame").removeClass("hidden");
    }else{
      $(".yasaiitame").addClass("hidden");
    }
    if($(".keyword_yasaiitame3").text().length < input_length){
      $(".yasaiitame").addClass("hidden");
    }
    
  };
  
});
