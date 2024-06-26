import { FC } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { InsertNamePage } from './pages/InsertNamePage';
import { UserProvider } from './contexts/UserContext';
import { ErrorProvider } from './contexts/ErrorContext';
import { MessageProvider } from './contexts/messageContext';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <ErrorProvider>
                <MessageProvider>
                    <UserProvider>
                        <Routes>
                            <Route path='/' element={<InsertNamePage />} />
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </UserProvider>
                </MessageProvider>
            </ErrorProvider>
        </BrowserRouter>
    )
}
