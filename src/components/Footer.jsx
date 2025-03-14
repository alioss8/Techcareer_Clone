import { useState } from "react";
import { Accordion, Container, Row, Col ,Image,Stack} from "react-bootstrap";
import '../styles/Footer.css'
const Footer = () => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <footer className=" text-white py-4">
      <Container>
        {/* Masaüstünde gösterilecek sütunlar */}
        <Row className="d-none d-md-flex">
          <Col md={2}>
            <h5> TECHCAREER</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Hakkımızda</a></li>
                <li><a href="#" className="text-dark">Etkinlikler</a></li>
                <li><a href="#" className="text-dark">Şirketler İçın</a></li>
                <li><a href="#" className="text-dark">Eğitmen Ol</a></li>
                <li><a href="#" className="text-dark">İş Birliği</a></li>
                <li><a href="#" className="text-dark">Referanslar</a></li>
                <li><a href="#" className="text-dark">İletişim</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5> BAŞVUR</h5>
            <ul className="list-unstyled ">
                <li><a href="#" className="text-dark">Bootcamp</a></li>
                <li><a href="#" className="text-dark">Hackathon</a></li>
                <li><a href="#" className="text-dark">Hiring Challange</a></li>
                <li><a href="#" className="text-dark">İş İlanları</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5> SENİN İÇİN</h5>
            <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Komünite</a></li>
                <li><a href="#" className="text-dark">TDC</a></li>
                <li><a href="#" className="text-dark">Blog</a></li>
                <li><a href="#" className="text-dark">Podcast</a></li>
                <li><a href="#" className="text-dark">Teknil Sözlük</a></li>
                <li><a href="#" className="text-dark">Mülakat Soruları</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5> VERİ POLİTİKAMIZ</h5>
            <ul className="list-unstyled ">
                <li><a href="#" className="text-dark mt-2">Aydınlatma Metini</a></li>
                <li><a href="#" className="text-dark mt-2">Hizmet Sözleşmesi</a></li>
                <li><a href="#" className="text-dark mt-2">Açık Rıza Metni</a></li>
                <li><a href="#" className="text-dark mt-2">Çerez Politakası</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <Image style={{marginBottom:"20px"}} src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"></Image>
            <p>Türkiye’nin teknoloji kariyeri platformu</p>
            <h6>SOSYAL MEDYA</h6>
            <Image src="https://www.techcareer.net/assets/images/footer/linkedin.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/twitter.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/instagram.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/youtube.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/facebook.svg"></Image>
            
          </Col>
          <hr />
          <Row>
            <Col>
            <Stack direction="horizontal">
            <Image src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=128&q=75"></Image>
            <p className="footer-p">Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26</p>
            </Stack>
            </Col>
          </Row>
        
        </Row>

        {/* Mobilde gösterilecek Accordion */}
        <Accordion activeKey={activeKey} className="d-md-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "0" ? null : "0")}>
            TECHCAREER
            </Accordion.Header>
            <Accordion.Body>
            <ul className="list-unstyled text-center">
                <li><a href="#" className="text-dark">Hakkımızda</a></li>
                <li><a href="#" className="text-dark">Etkinlikler</a></li>
                <li><a href="#" className="text-dark">Şirketler İçın</a></li>
                <li><a href="#" className="text-dark">Eğitmen Ol</a></li>
                <li><a href="#" className="text-dark">İş Birliği</a></li>
                <li><a href="#" className="text-dark">Referanslar</a></li>
                <li><a href="#" className="text-dark">İletişim</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "1" ? null : "1")}>
            BAŞVUR
            </Accordion.Header>
            <Accordion.Body>
            <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Bootcamp</a></li>
                <li><a href="#" className="text-dark">Hackathon</a></li>
                <li><a href="#" className="text-dark">Hiring Challange</a></li>
                <li><a href="#" className="text-dark">İş İlanları</a></li>
            </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "2" ? null : "2")}>
            SENİN İÇİN
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Komünite</a></li>
                <li><a href="#" className="text-dark">TDC</a></li>
                <li><a href="#" className="text-dark">Blog</a></li>
                <li><a href="#" className="text-dark">Podcast</a></li>
                <li><a href="#" className="text-dark">Teknil Sözlük</a></li>
                <li><a href="#" className="text-dark">Mülakat Soruları</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "3" ? null : "3")}>
            VERİ POLİTİKAMIZ
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Aydınlatma Metini</a></li>
                <li><a href="#" className="text-dark">Hizmet Sözleşmesi</a></li>
                <li><a href="#" className="text-dark">Açık Rıza Metni</a></li>
                <li><a href="#" className="text-dark">Çerez Politakası</a></li>
              </ul>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Col md={4} className="d-md-none text-center mt-4"  >
        
            <Image src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" ></Image>
            <p>Türkiye’nin teknoloji kariyeri platformu</p>
            <h6>SOSYAL MEDYA</h6>
            <Stack direction="horizontal" className="text-center">
            <Container   className="text-center mt-2">
            <Image src="https://www.techcareer.net/assets/images/footer/linkedin.svg" style={{width:"50px", height:"50px" }} ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/twitter.svg"  style={{width:"50px", height:"50px"}}   ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/instagram.svg"  style={{width:"50px", height:"50px"}}  ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/youtube.svg"   style={{width:"50px", height:"50px"}}     ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/facebook.svg"  style={{width:"50px", height:"50px"}}     ></Image>
            </Container>
            </Stack>  

            <hr />
          </Col>
          
          <Row>
            <Col md={12}  className="d-md-none" >
            <Stack direction="vertical">
            <Container  className="text-center mt-2">
            <Image src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=128&q=75" style={{width:"50px", height:"50px"}}></Image>
            <p className="footer-p">Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26</p>
            </Container>
            </Stack>
            </Col>
          </Row>
      </Container>
    </footer>
  );
};

export default Footer;
