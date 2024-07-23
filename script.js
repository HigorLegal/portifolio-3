
                    const radios = document.querySelectorAll('input[name="slider"]');
                    let index = 0;

                    //automatic slide change
                    function changeSlide() {
                        radios[index].checked = true; 
                        index = (index + 1) % radios.length; 
                    }
                    setInterval(changeSlide, 3000);