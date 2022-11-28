function getBotResponse(input) {
    if (input =='lump in breast' || input =='lump in underarm'||input =='thickening of part of the breast.'||input =='swelling of of part of the breast.'||input =='irritation of breast skin.') {
        /*return (
            "There are high chances you might have breat cancer. Please consult an Oncologist. I will redirect you!"

        )*/
        return [
            "There are high chances you might have breat cancer. Please consult an Oncologist. I will redirect you in ",
            setTimeout(function () {
                window.location.href = 'https://www.google.com/search?rlz=1C1CHBD_enIN913IN913&cs=1&sxsrf=ALiCzsZC0cVk5WERR7vi5D2f2wcVYfeIDQ:1668314149668&q=oncologist+near+me&sa=X&ved=2ahUKEwjdn-fBqqr7AhWcUWwGHVf8Di8Q0EB6BAgBEAQ&biw=2064&bih=1085&dpr=0.9'
              }, 4000)
            ]
        }
}