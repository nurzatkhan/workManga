import { HeadComponent } from "../components/HeadComponent";
import s from '../styles/eror.module.css'

export default function ErrorPage(){
    return (
        <HeadComponent title={'404'}>
            <h1 className={s.error}>Error 404</h1>
            <p>э ОЙбой</p>
        </HeadComponent>
    )
}