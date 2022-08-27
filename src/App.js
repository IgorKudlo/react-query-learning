import './App.css';
import Films from './Films';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {useState} from 'react';

const queryClient = new QueryClient()

function App() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <button onClick={() => setIsOpen(!isOpen)}>Click</button>
                {isOpen && <Films/>}
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
