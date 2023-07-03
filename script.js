let n = 10;

const gabber=()=>{
    setTimeout(()=>{
        document.getElementById("num").innerHTML = n--;
        setTimeout(()=>{
            document.getElementById("num").innerHTML = n--;
            setTimeout(()=>{
                document.getElementById("num").innerHTML = n--;
                setTimeout(()=>{
                    document.getElementById("num").innerHTML = n--;
                    setTimeout(()=>{
                        document.getElementById("num").innerHTML = n--;
                        setTimeout(()=>{
                            document.getElementById("num").innerHTML = n--;
                            setTimeout(()=>{
                                document.getElementById("num").innerHTML = n--;
                                setTimeout(()=>{
                                    document.getElementById("num").innerHTML = n--;
                                    setTimeout(()=>{
                                        document.getElementById("num").innerHTML = n--;
                                        setTimeout(()=>{
                                            document.getElementById("num").innerHTML = n--;
                                            setTimeout(()=>{
                                                document.getElementById("num").innerHTML = n--;
                                                setTimeout(()=>{
                                                    document.getElementById("num").innerHTML=("Happy Independence Day");
                                                },1000);
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
        
    },2000); 
}
gabber(n);


