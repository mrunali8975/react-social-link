import './App.css';
import logo from '../public/assets/images/avatar-jessica.jpeg'
function App() {
  return (
    <div className="App flex items-center justify-center min-h-screen">
      <div className="bg-zinc-900 rounded-lg		 text-black w-auto p-6 h-auto  flex flex-col items-center justify-center ">

        <img src={logo} className='w-16 h-16 mb-5 rounded-full ' />
        <div className='items-center justify-center flex flex-col'>
          <h1 className='text-white text-lg font-inter font-bold'>
            Jessica Randall
          </h1>
          <h4 className='text-green-custom text-xs font-inter'>London, United Kingdom</h4>
        </div>
          <p  className='text-white text-xs mt-5 mb-5  '>
            "Front-end Developer and avid reader."
          </p>

        <div className='	'>
          <div className='h-8 rounded-md hover:bg-green-custom   w-52 bg-zinc-700 mb-3	 items-center justify-center flex '>
            <p className='text-white text-sm font-bold hover:text-gray-950'>GitHub</p>
          </div>
          <div className='h-8 rounded-md  hover:bg-green-custom w-52 bg-zinc-700  mb-3	 items-center justify-center flex '>
            <p className='text-white text-sm font-bold hover:text-gray-950'>Frontend Mentor</p>
          </div>
          <div className='h-8 rounded-md hover:bg-green-custom  w-52 bg-zinc-700	 mb-3 items-center justify-center flex '>
            <p className='text-white text-sm font-bold hover:text-gray-950'>Linkedin</p>
          </div>
          <div className='h-8 rounded-md hover:bg-green-custom  w-52 bg-zinc-700	 mb-3 items-center justify-center flex '>
            <p className='text-white text-sm font-bold hover:text-gray-950'>Twitter</p>
          </div>
          <div className='h-8 rounded-md  hover:bg-green-custom w-52 bg-zinc-700	 mb-3 items-center justify-center flex '>
            <p className='text-white text-sm font-bold hover:text-gray-950'>Instagram</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
