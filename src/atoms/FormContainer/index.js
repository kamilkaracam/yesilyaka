import React, {useState} from "react";
import axios from "axios";
//import npm packages
import {Formik,Form , Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import InputMask from "react-input-mask";
import {useForm,Controller} from "react-hook-form";

//import styles
import * as classes from './formcontainer.module.scss';

const defaultValues = {
    reactMaskInput: ""
}



const FormContainer = () => {
    const { control } = useForm({ defaultValues });
    const [phoneNumber, setPhoneNumber] = useState('');
    const onSubmit = async (values, { setSubmitting, resetForm  }) => {
        const url = 'https://webservice.mesaholding.com.tr/campaign.php?token=4dabd1b453f81549e8ac5903ec2fb467'
        values.phone = phoneNumber
        const {name, surname, email, message, phone, checked } = values;
        var data = {
            smkampanya: '',
            name,
            surname,
            email,
            subject: 'Yeşilyaka Bilgi Al Formu',
            message,
            phone,
            product : 196,
            // utm_source: getParameterByName('utm_source'),
            // utm_campaign: getParameterByName('utm_campaign'),
            // utm_content: getParameterByName('utm_content'),
            // utm_term: getParameterByName('utm_term'),
            // utm_medium: getParameterByName('utm_medium'),
            mailing: checked ? 1 : 0,
            site : 'http://www.yesilyaka.com.tr',
            page: '/kampanya/'
        };
        await axios.post(url, data)

        setSubmitting(false)
        setPhoneNumber('')
        resetForm()
    }
    return(
        <Formik
            //all forms initial states
            initialValues={{
                firstName: '',
                lastName: '',
                phone:'',
                email: '',
                message: '',
                termOfService: false,
            }}

            //validation in Formik with yup
            validationSchema={
                Yup.object({
                    firstName:
                        Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('lütfen adınızı giriniz'),
                    lastName:
                        Yup.string()
                        .required('lütfen soyisim giriniz'),
                    phone: Yup.string(),
                    message: Yup.string()
                            .required('lütfen mesajınızı giriniz'),
                    email:
                        Yup.string().email('Invalid email address').required('lütfen mailinizi giriniz'),
                    termOfService:
                        Yup.boolean().oneOf([true],'zorunlu alan').required('zorunlu alan'),
                })}

            //onsubmit function with Formik
            onSubmit={onSubmit}
        >
                <Form className={classes.form}>
                    <div className={classes.formContainer}>

                        <div className={classes.formWrapper}>
                            <label htmlFor="firstName">Adınız</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage component={'span'} name="firstName" className={classes.error}/>

                            <label htmlFor="lastName">Soyadınız</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage component={'span'} name="lastName" className={classes.error}/>

                            <label htmlFor="phone">Telefon Numaranız</label>
                            <Controller
                              name="reactMaskInput"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <InputMask mask="(999)9999999" id="phone" name="phone" value={phoneNumber} onChange={(e) => {
                                    setPhoneNumber(e.target.value) 
                                    onChange(e)
                                }}>
                                    {(inputProps) => (
                                      <input
                                        {...inputProps}
                                        type="tel"
                                        className="input"
                                      />
                                    )}
                                </InputMask>
                              )}
                            />

                            <ErrorMessage component={'span'} name="phone" className={classes.error}/>

                            <label htmlFor="email">E-Posta Adresiniz</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage component={'span'} name="email" className={classes.error}/>

                            <label htmlFor="message" className={classes.textareaLabel}>Mesajınız</label>
                            <Field  name="message" type="text" as="textarea" rows="3" placeholder="Mesajınızı Yazınız.."/>
                            <ErrorMessage component={'span'} name="message" className={classes.error}/>

                        </div>

                        <div className={classes.checkWrapper}>
                            <label htmlFor="termOfService">
                                <span>
                                    <Field type="checkbox" name="termOfService" />
                                </span>
                                <span>
                                    Kişisel Verilerin Korunması Kanunu uyarınca, aydınlatma
                                metnini okuduğumu ve anladığımı kabul ediyorum.
                                </span>
                            </label>
                            <ErrorMessage component={'span'} name="termOfService" className={classes.error}/>
                            <label htmlFor="checked">
                                <span>
                                   <Field type="checkbox" name="checked" />
                                </span>
                                <span>
                                    Mesa Nurol Adi Ortaklığı’nı oluşturan, Mesa Mesken Sanayi A.Ş. ve Nurol İnşaat <br/>
                                    ve Ticaret A.Ş.
                                tarafından tanıtım, teklif, promosyon, anket, etkinlik gibi her türlü doğrudan ve dolaylı
                                pazarlama faaliyetleri kapsamında tarafıma elektronik posta, telefon ve benzeri iletişim kanalları
                                vasıtasıyla ses ve görüntü içerikli bilgilendirme ve pazarlama iletileri gönderilmesine, kişisel
                                verilerimin bu amaçla işlenmesine ve gönderim sağlanması için hizmet aldığınız üçüncü kişilerle
                                paylaşılmasına onay veriyorum.
                                </span>
                            </label>

                        </div>
                    </div>
                    <div className={classes.downWrap}>
                        <div className={classes.textareaTwo}>
                            <label htmlFor="message" className={classes.textareaLabel}>Mesaj</label>
                            <Field  name="message" type="text" as="textarea" rows="3" />
                        </div>
                        <button type="submit">GÖNDER</button>
                    </div>
                </Form>
        </Formik>
    )
}

export default FormContainer;