import './App.css';
import Films from './Films';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Films/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
