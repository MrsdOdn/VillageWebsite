import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function KullanimKosullari() {
  return (
    <div>
      
        <Container maxWidth="md" sx={{marginY:5,}}>
        <Typography variant="h3" gutterBottom>
            Kullanım Koşulları
          </Typography>
          <Typography variant="h4" gutterBottom>
            Merhaba Değerli Ziyaretçimiz,
          </Typography>
          <Typography variant="body1" paragraph>
            Lütfen,{" "}
            <Link
              href="https://site.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://site.com
            </Link>{" "}
            web sitemizi kullanmadan önce aşağıdaki kullanım koşulları
            sözleşmesini dikkatlice okuyunuz. Siteye erişiminiz, aşağıdaki
            şartlara tam anlamıyla uymayı kabul ettiğiniz anlamına gelir. Bu
            koşulları kabul etmiyorsanız, lütfen sitemizi kullanmaktan kaçının.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Sözleşme Şartlarına Uyum:
          </Typography>
          <Typography variant="body1" paragraph>
            SİTE, Şirket Adı tarafından yönetilmektedir ve işbu kullanım
            koşulları, kullanıcının siteye erişimi ve kullanımını
            düzenlemektedir. SİTE'yi kullanarak, bu şartları tamamen ve koşulsuz
            olarak kabul ettiğinizi beyan etmiş olursunuz.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Gizlilik Politikası:
          </Typography>
          <Typography variant="body1" paragraph>
            Kişisel verilerinizin işlenmesiyle ilgili detaylı bilgileri içeren
            gizlilik politikamıza göz atmanızı öneririz. SİTE'yi kullanarak,
            gizlilik politikamıza uygun olarak verilerinizin işlendiğini kabul
            etmiş sayılırsınız.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Telif Hakları:
          </Typography>
          <Typography variant="body1" paragraph>
            SİTE'de yer alan tüm içerik (metin, kod, grafikler, logolar,
            resimler, ses dosyaları ve yazılım), Şirket Adı'na aittir ve tüm
            hakları saklıdır. İzin almadan içeriğin kopyalanması veya
            çoğaltılması yasaktır.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Genel Hükümler:
          </Typography>
          <Typography variant="body1" paragraph>
            Kullanıcılar, sitemizi yalnızca hukuka uygun ve kişisel amaçlarla
            kullanacaklarını taahhüt ederler. Sitemizin doğrudan veya dolaylı
            olarak üçüncü şahısların haklarına zarar verecek faaliyetlerde
            bulunmamayı kabul edersiniz. Sitemizdeki bilgilerin doğruluğunu
            sağlamak için çaba göstersek de, herhangi bir garanti vermemekte ve
            sorumluluk kabul etmemekteyiz.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Harici Bağlantılar:
          </Typography>
          <Typography variant="body1" paragraph>
            Sitemizde bulunan harici bağlantılar yalnızca kullanıcıya erişim
            sağlamak amacıyla verilmiştir. Bu bağlantıların içeriği hakkında
            herhangi bir sorumluluk kabul etmemekteyiz.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Virüs ve Güvenlik:
          </Typography>
          <Typography variant="body1" paragraph>
            SİTE, virüslerden arındırılmış bir şekilde tutulmaya çalışılsa da,
            indirilen verilerin güvenliğinden kullanıcılar sorumludur. Virüs
            veya kötü amaçlı yazılımlardan kaynaklanan zararlardan dolayı
            sorumluluk kabul edilmemektedir.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Hizmet Güvencesi:
          </Typography>
          <Typography variant="body1" paragraph>
            SİTE, hizmetlerin sürekli ve hatasız olacağına dair bir garanti
            vermemektedir. Ayrıca, SİTE'ye olan erişiminizi önceden
            bildirmeksizin sonlandırma hakkını saklı tutar.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Sorumluluğun Sınırlandırılması:
          </Typography>
          <Typography variant="body1" paragraph>
            SİTE'nin kullanımından kaynaklanan zararlara ilişkin sorumluluğumuz,
            kast ve ağır ihmal ile sınırlıdır. Hukuken mücbir sebep sayılan
            durumlar hariç, tazminat yükümlülüğümüz bulunmamaktadır.
          </Typography>
          {/* Diğer maddeler de aynı yapıda devam edebilir */}

          <Typography variant="h6" gutterBottom>
            Teşekkür ederiz! <Link href="#">iletisim@site.com</Link> adresinden
            bizimle iletişime geçebilirsiniz.
          </Typography>
        </Container>
      
    </div>
  );
}
export default KullanimKosullari;
