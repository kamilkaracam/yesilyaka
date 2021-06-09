import React from 'react';

//import components in project
import Title from "../../atoms/Title";

//import images

import mesawithnurol from "../../assets/images/mesawithnurol.png";

//import style
import * as classes from "./corporatecomponents.module.scss";
import { Button } from "react-bootstrap";

const CorporateComponents = () => {
    return (
        <>
            <div className={classes.imgwrap} data-aos={'fade-up'} data-aos-duration={'2000'}>
                <div className={classes.imgbox}>
                    <img
                        className="d-block"
                        src={mesawithnurol}
                        alt="mesawithnurol"
                        width={'100%'}
                    />
                </div>

            </div>
            <div className={classes.corporateText}>
                <p data-aos={'zoom-in'} data-aos-duration={'2000'}>
                    50 yılı aşkın süredir sadece yeni yuvalar için değil, yeni hatıralar biriktirmek için de çalışıyoruz.<br />                     Çünkü biz insanın biriktirebileceği en değerli şeyin anıları olduğuna inanıyoruz.
                </p>

                <p data-aos={'zoom-in'} data-aos-duration={'2000'}>
                    Bugüne kadar hayata geçirdiğimiz yüzlerce projeye değer katan, <br />
                    bizi büyük bir aile yapan yüz binlerce dostumuzun <br />
                    en güzel anılarının ortak noktası olmanın mutluluğunu yaşıyoruz.<br />
                    Şimdi de güzel ve unutulmaz anılarınıza yenilerini ekleyeceğiniz, <br />
                    muhteşem doğasıyla kendinizi hep genç hissedeceğiniz Yeşilyaka’yı beğeninize sunuyoruz.

                </p>
            </div>

            <Title title="MESA VE NUROL GÜVENCESİYLE" subtitle="KURUMSAL" />

            <div className={classes.corporateText}>
                <p data-aos={'zoom-in'} data-aos-duration={'2000'}>
                    Yeşiller içinde uyandığınız ve villanızdan maviye adım attığınız bir yaşam düşleyin. <br />
                    Şehre yakın ancak bir o kadar da doğayla ve suyla temasta olan bir yaşam.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'2000'}>
                    Mutlu bir yaşam için doğadan asla vazgeçmeyenler Yeşilyaka Koru’da hayatlarına başladı!<br />
                    İstanbul gürültüsünden uzak, orman ile çevrelenmiş villalarda her anınızı tatilde gibi yaşayabilirsiniz.<br />

                    Aileniz için en iyi seçenekler Yeşilyaka Koru ve Yeşilyaka Su’da bir arada.<br />
                    Ulaşım, sosyal yaşam ve ihtiyaçlarınız için doğadan uzaklaşmaya gerek kalmadan evinizde huzuru <br />
                   bulabilirsiniz.<br />
                    İstanbul’da iyi bir hayat standardına ulaşmak, kaliteli yaşamak için doğa ve şehir<br /> Yeşilyaka’da.
                </p>
            </div>

            <Title title="MESA MESKEN" />

            <div className={classes.corporateText}>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    Mesa 1969 yılında, Mesa Mesken Sanayii adıyla, yaşamlara değer katmak ve sektöründe “ilk”leri yaratmak hedefiyle yolculuğuna başladı. Attığı cesur ve yenilikçi adımlarla bugüne kadar faaliyet gösterdiği her alanda bu hedefine ulaşan Mesa’nın en önemli değeri, yüz binlerce
                    Mesa’lının mutluluğu ve Mesa markasına olan güvenidir. Seyahati boyunca, yapılarını tüm bileşenleriyle birlikte tasarlayan Mesa, toplu konut yaklaşımını tamamıyla değiştiren “konutta marka” kavramını yarattı.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    Altyapı ve çevre düzenlemeleri dahil, ilk tasarımından teslimine ve teslim sonrası işletilmesine kadar üretiminin
                    tüm aşamasında Mesa imzası bulunan 12.000.000 m2 iskân edilmiş alanda 100.000’den fazla konut,
                    Mesa’nın ödünsüz kalite anlayışının ürünüdür. Sayısı bugün 4.500’lere ulaşan kadrosu,
                    Mesa’nın genel birikimine ve kültürüne, her geçen gün daha fazla deneyim kazandırmaktadır.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    Gittikçe genişlettiği yatırım alanlarında, konutta yarattığı marka kavramının da ötesine geçerek
                    bir “yaşam markası” haline gelen Mesa, günümüzde hem girişimci hem yüklenici hem de üretici olarak
                    faaliyetlerine devam ediyor. Yurt içinde ve yurt dışında, altyapısı, teknik ve sosyal tesisleri, çevre
                    ve peyzaj düzenlemeleriyle hayata geçirdiği büyük konut sitelerinin yanı sıra iş merkezleri, alışveriş
                    merkezleri, okul ve hastaneler, turizm ve spor tesisleri, şehir parkları, sağlık ve kültür merkezleri,
                    ofis binaları, sanayi tesisleri ve benzeri birçok yapıyı hayata geçirmeye devam ediyor. Mesa kuruluşları,
                    bu işlevi en güvenilir şekilde yerine getirmek amacıyla bir yandan tasarım, planlama ve yapım aşamalarında
                    görev alırken diğer yandan inşaat sektörüne başta tünel kalıp olmak üzere her türlü çelik kalıp, çelik hasır,
                    doğrama ve prefabrik eleman gibi yapı bileşenlerini de üreterek dünya liderliğine emin adımlarla tırmanıyor.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    İnşa ettiği binaları sahiplerine “Koşulsuz Müşteri Memnuniyeti Garantisi” ile teslim eden Mesa’nın, “Müşteri Hizmetleri Birimi” de
                    kullanım aşamasında çıkabilecek kusurları anında gidererek kaliteli hizmet anlayışına yeni bir boyut kazandırıyor. Türkiye toplu
                    konut sektörüne kazandırdığı “Tünel Kalıp Teknolojisi”, “Müşteri Hizmetleri Birimi” ve “Konut Siteleri Hizmet ve Bakım Servisi”
                    gibi “ilk”leriyle Mesa, yeni sektörlere adım atarken geçmiş başarılarından güç alıyor ve ilkelerinin sağlamlığına güvenerek 50
                    yıllık bir gelecek üretmenin gururunu yaşıyor.
                </p>
            </div>

            <Title title="NUROL" />

            <div className={classes.corporateText}>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    Nurol Şirketler Topluluğu’nun ilk ve lider şirketi olan Nurol İnşaat ve Ticaret A.Ş.,
                    1966 yılında uluslararası genel müteahhitlik firması olarak kurulmuş ve faaliyetinin başlangıcından bu
                    yana büyük çaplı ve yüksek teknoloji ürünü birçok uluslararası proje ile adını duyurmuştur.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    1980-1990 döneminde Nurol İnşaat ve Ticaret A.Ş., uluslararası platformlardaki faaliyetlerini, gerçekleştirdiği
                    Mühendislik-Tedarik-İnşaat esaslı “Anahtar Teslim” projeler ile petrol üreticisi ülkelere, özellikle
                    Suudi Arabistan Krallığı’na kaydırmış ve ulaşılan başarı seviyesi ile Uluslararası Türk Müteahhitler arasında
                    üstün bir pozisyon kazanmıştır. 90’lı yıllarda ise, ulaşılan pozisyonun da bir sonucu olarak, Nurol İnşaat ve Ticaret
                    A.Ş. uluslararası faaliyetlerini, alt şirketleri aracılığıyla Rusya Federasyonuna ve Bağımsız Devletler Topluluğu üyesi
                    ülkelere yöneltmiştir. 1991 yılında, Sovyetler Birliği’nin dağılmasından yalnızca bir yıl sonra, Türkmenistan’da
                    ilk taahhüt projesi yüklenilmiş ve bölgede faaliyete geçen ilk batılı şirketler arasında yer alınmıştır. 2000’li
                    yıllara gelindiğinde ise Orta Doğu ve Kuzey Afrika ülkeleri ilgi sahasının odağı hâline gelmiş, bu dönem süresince
                    yurt dışı çalışmalarına paralel olarak yurt içi çalışmalarına da tüm hızıyla devam etmiş,
                    Türkiye’nin önde gelen üstyapı ve altyapı yatırımları çerçevesinde pek çok proje referanslar arasına katılmıştır.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    2019 yılı itibariyle, Nurol İnşaat ve Ticaret A.Ş.’nin faaliyet sahası, üstün teknolojik ve idari altyapısı,
                    inşaat sektöründeki lider pozisyonu, 10.000’i aşkın teknik ve idari personeli, güçlü makina-ekipman parkı ve
                    finansman temin kabiliyetlerine paralel olarak üç kıtada 15 ülkeye yayılmış bulunmaktadır. 1966 yılında Ankara merkezli
                    olarak kurulmuş ve 2015 yılında İstanbul’da bulunan yeni genel merkezine taşınmış olan Nurol İnşaat ve Ticaret A.Ş.,
                    35’e yakın bağlı şirket ve ortaklıktan oluşan Nurol Grubu’nun çekirdek şirketi olup, 10 Milyar ABD Doları mertebesine
                    ulaşan referans proje portföyü ve 13 Milyar ABD Dolarını aşan devam eden proje stoku ile sektörünün hemen her dalında
                    önemli projelere imza atmaya devam etmektedir. Nurol İnşaat, ABD’li “Engineering News Record” tarafından yayınlanan Dünyanın En
                    Büyük Küresel Müteahhitleri ve Dünyanın En Büyük Uluslararası Müteahhitleri listelerinin her ikisinde de yer almaktadır.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    Nurol İnşaat ve Ticaret A.Ş, sahip olduğu geniş uzmanlık alanı ile, dünya genelindeki
                    büyük çaplı altyapı ve üstyapı projelerinin başarı ile sonuçlandırılmasında önemli paya sahiptir.
                    Nurol İnşaat’ın Merkez ve Projelerindeki faaliyetlerinin, ISO 9001 Kalite Yönetim Sistemi, ISO 14001 Çevre
                    Yönetim Sistemi ve ISO 45001 İş Sağlığı ve Güvenliği Yönetim Sistemi şartlarına uygunluğu DakkS ve TÜRKAK akreditasyonuna
                    sahip uluslararası bağımsız belgelendirme firması tarafından periyodik olarak denetlenerek belgelendirilmektedir.
                </p>
                <p data-aos={'zoom-in'} data-aos-duration={'1300'}>
                    NUROL İnşaat ve Ticaret A.Ş., burada kısaca değinilen çalışmaları ve başarılarla dolu geçmişinin haklı gururunu, kuruluşunun ilk
                    gününden itibaren kaybetmediği genç ve dinamik ruh ile emin adımlarla geleceğe taşımaktadır.
                </p>
            </div>


        </>
    )
}

export default CorporateComponents;