import { signInWithPopup, UserCredential } from "firebase/auth";
import { useAuth, useAuthDispatch } from "../../store/auth/context";
import { AuthActionFactory } from "../../store/auth/actionCreator";
import { useNavigate, useSearchParams } from "react-router-dom";
import { firebaseAuth, googleProvider } from "../../firebase";
import { PrimaryButton } from "../../components/ui/button";
import { useEffect } from "react";

export default function Login() {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const authUser = useAuth();
    const [searchUrl] = useSearchParams()

    function signInWithGoogle() {
        signInWithPopup(firebaseAuth, googleProvider).then((res: UserCredential) => {
            dispatch(AuthActionFactory.signIn(res.user, true))
            const redirectLink = searchUrl.get('redirectLink')
            if (redirectLink) {
                navigate(redirectLink, {
                    replace: true
                })
            } else {
                navigate('/home');
            }
        }).catch(() => {
            dispatch(AuthActionFactory.signOut())
        })
      }
    console.log('auth ', authUser);
    useEffect(() => {
        if((authUser && authUser.user.uid)) {
            navigate('/home')
        }
    }, []);
    if (!authUser || !authUser.user || !authUser.user.uid)
    return (
        <div className="h-lvh w-lvw m-auto flex">
            <div className="flex-col items-center justify-center p-10 border-[1px] w-fit m-auto">
                <p className="font-bold">Login</p>
                <PrimaryButton onClick={signInWithGoogle} className="my-4 h-10 cursor-pointer"> gmail login
                </PrimaryButton>
            </div>
        </div>
    )
}