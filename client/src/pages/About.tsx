import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const About = () => {
  return (
    <div>

        <div className="text-2xl text-center pt-8 border-t  ">
            <Title text1={"ABOUNT"} text2={"US"}></Title>
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
            <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />

            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                </p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                <b>Our Mission</b>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
           
            </div>
        </div>

        <div className="text-4xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p className="text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Convenience:</b>
                <p className="text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Exceptional Customer Service:</b>
                <p className="text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
            </div>
        </div>

      <NewsLetter></NewsLetter>

    </div>
  )
}

export default About