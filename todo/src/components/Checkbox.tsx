import { Check } from '@phosphor-icons/react';
import styles from './Checkbox.module.css';
interface CheckboxProps{
    isChecked:boolean
    onCheckedChange?:(isChecked:boolean)=>void;
}
export function Checkbox({onCheckedChange,isChecked}:CheckboxProps){

    function handleChangeChecked(){
        const newChecked=!isChecked;
        if(onCheckedChange){
            onCheckedChange(newChecked);
        }
    }

return(
    <div className={isChecked ? styles.checked : styles.notchecked} onClick={handleChangeChecked}>
        {isChecked ? <Check size={16}/> : ''}
    </div>
)
}