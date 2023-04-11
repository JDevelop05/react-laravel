import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Create from '../components/Create';
import Show from '../components/Show';

export default function Inicio() {
  const [showComponent, setShowComponent] = useState(false);
  const { logout, user } = useAuth({ middleware: 'auth' });

  function handleClick() {
    setShowComponent(true);
  }

  function handleCancel() {
    setShowComponent(false);
  }

  return (
    <>
        <header className="p-5 border-b bg-white shadow">
      <div className="container mx-auto flex justify-between">
        <a href="#" className="text-3xl font-black">
          Home
        </a>
        
        
        <nav className="flex gap-2 items-center">
          <p className="text-lg text-center">
            Hi: <span className="font-bold">{user?.name}</span>
          </p>

          <button className='rounded-lg text-center bg-blue-600 hover:bg-blue-800 p-2 font-bold text-white truncate' onClick={handleClick}>Create</button>

          <button
            type="button"
            className="rounded-lg text-center bg-red-500 hover:bg-red-700 p-2 font-bold text-white truncate"
            onClick={logout}
          >
            Sign off
          </button>
        </nav>
      </div>
     
    </header>

    <nav>
        {showComponent && <Create onCancel={handleCancel} />}
    </nav>


    <main className="container mx-auto py-10">
        <Show />
      </main>

    </>
    
  );
}
