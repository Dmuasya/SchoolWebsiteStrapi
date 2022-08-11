


 import { localhost } from "./../../adminurl.js";
export const slider = async () => {



    try {

        const url = `${localhost}/sliders`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);
        // console.log(result[0].imgslider[0].images[1].formats.large.url);

        document.queryselector(".slider__image1").src = `${result[0].imgslider[0].images[0].formats.large.url}`;
        document.queryselector(".slider__image2").src = `${result[0].imgslider[1].images[0].url}`;
        document.queryselector(".slider__image3").src = `${result[0].imgslider[2].images[0].formats.thumbnail.url}`;




}



catch(error) {
    console.log("failed", error);
}

}


  

