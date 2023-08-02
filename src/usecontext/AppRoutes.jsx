import { Navigate, Route, Routes } from "react-router-dom"
import { LugaresPage } from "./pages/LugaresPage"
import { PopularesPage } from "./pages/PopularesPage"
import { AboutPage } from "./pages/AboutPage"
import { MedioPage } from "./pages/MedioPage"
import { Zona1 } from "./pages/zona1"
import { Zona2 } from "./pages/Zona2"
import { Zona3 } from "./pages/Zona3"
import { Zona4 } from "./pages/Zona4"
import { Zona5 } from "./pages/Zona5"
import { Zona12 } from "./pages/Zona12"
import { Zona16 } from "./pages/Zona16"

export const AppRoutes = () => {
    return (
        < >
            <Routes >
                <Route path="/" element={ <MedioPage /> } />
                <Route path="/lugares" element={ <LugaresPage /> } />
                <Route path="/populares" element={ <PopularesPage /> } />
                <Route path="/about" element={ <AboutPage/> } />
                {/* Zonas  */}
                <Route path="/lugares/zona1" element={ <Zona1 /> } />
                <Route path="/lugares/zona2" element={ <Zona2 /> } />
                <Route path="/lugares/zona3" element={ <Zona3 /> } />
                <Route path="/lugares/zona4" element={ <Zona4 /> } />
                <Route path="/lugares/zona5" element={ <Zona5 /> } />
                <Route path="/lugares/zona6" element={ '' } />
                <Route path="/lugares/zona7" element={ '' } />
                <Route path="/lugares/zona8" element={ '' } />
                <Route path="/lugares/zona9" element={ '' } />
                <Route path="/lugares/zona10" element={ '' } />
                <Route path="/lugares/zona11" element={ '' } />
                <Route path="/lugares/zona12" element={ <Zona12 /> } />
                <Route path="/lugares/zona13" element={ '' } />
                <Route path="/lugares/zona14" element={ '' } />
                <Route path="/lugares/zona15" element={ '' } />
                <Route path="/lugares/zona16" element={ <Zona16 /> } />
                <Route path="/lugares/zona17" element={ '' } />
                <Route path="/lugares/zona18" element={ '' } />
                <Route path="/lugares/zona19" element={ '' } />
                <Route path="/lugares/zona20" element={ '' } />
                <Route path="/lugares/zona21" element={ '' } />
                <Route path="/lugares/zona22" element={ '' } />
                <Route path="/lugares/zona23" element={ '' } />
                <Route path="/lugares/zona24" element={ '' } />
                <Route path="/lugares/zona25" element={ '' } />
                


                <Route path="/error" element={ <Navigate to='/error404' /> } />
            </Routes>
        </>
    )
}
