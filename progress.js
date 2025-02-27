// როგორ სწავლობს ჩემი ბიჭი?
// მოცემული გვაქვს გიგოს გამოცდის შედეგები:


const gigosTestResults = [10, 20, 40, 50]; // ქულების სია, განუსაზღვრელი რაოდენობით


// იმისათვის, რომ გიგოს დედას ვუპასუხოთ თუ როგორ სწავლობს მისი შვილი, 
// საჭიროა პირველი და ბოლო გამოცდის ქულები შევადაროთ ერთმანეთს და ვნახოთ თუ იგრძნობა პროგრესი.



// თუ სხვაობა 10-ზე დაბალია, დედას ეკრანზე გამოვუტანოთ: "რავიცი, ნიჭიერია მარა ზარმაცი"
// თუ სხვაობა 10 ან უფრო მაღალია, ეკრანზე გამოვიტანოთ: "კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ"
// თუ სხვაობა არაა, ან რეგრესი აქვს გიგოს, ეკრანზე გამოვიტანოთ: "უხ გიგო გიგოოო"

let diference = gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0];

if(diference < 10 && diference >  0){
    console.log('რავიცი, ნიჭიერია მარა ზარმაცი')
}else if( diference >= 10){
    console.log('კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ"')
}else{
    console.log('უხ გიგო გიგოოო');
}