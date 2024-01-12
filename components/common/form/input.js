import classNames from "classnames";
import { useField } from "formik";
import styles from './form.module.css';
export const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classNames(styles.inputContainer)}>
            <div className="relative z-0">
                <label className="font-small">{label}</label>
                <input  placeholder=" " {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small error">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};
export const InputTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={classNames(styles.inputContainer)}>
            <div className="relative z-0">
                <label className="font-small">{label}</label>
                <textarea  placeholder=" " {...field} {...props} className={classNames(styles.textArea)} />
            </div>
            {meta.touched && meta.error ? (
                <span className="font-small error">
                    {meta.error}
                </span>
            ) : null}
        </div>
    );
};