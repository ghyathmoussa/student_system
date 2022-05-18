CREATE DATABASE birlisanbirinsan;

CREATE TABLE kayit_elemani (eleman_id int auto_increment PRIMARY KEY,
							eleman_username varchar(255) NOT NULL,
                            eleman_password varchar(255) NOT NULL);
                            
CREATE TABLE sube (sube_id int auto_increment PRIMARY KEY,
				   isim varchar(255),
                   derslik_kapasite int,
                   adres varchar(255) NOT NULL,
                   tanitim varchar(255) NOT NULL);

CREATE TABLE derslik (derslik_id int auto_increment PRIMARY KEY,
					  sube_id int NOT NULL,
                      FOREIGN KEY (sube_id) REFERENCES sube(sube_id),
                      kontenjan int);

CREATE TABLE ogretmen (ogretmen_id int auto_increment PRIMARY KEY,
					   isim varchar(255),
                       soyisim varchar(255)); 

CREATE TABLE ders (ders_id int auto_increment PRIMARY KEY,
				   dil varchar(255) NOT NULL,
                   sube_id int NOT NULL,
                   FOREIGN KEY (sube_id) REFERENCES sube(sube_id),
                   ogretmen_id int NOT NULL,
                   FOREIGN KEY(ogretmen_id) REFERENCES ogretmen(ogretmen_id),
                   derslik_id int NOT NULL,
                   FOREIGN KEY(derslik_id) REFERENCES derslik(derslik_id),
                   starttime time NOT NULL,
                   endtime time NOT NULL,
                   fiyat int NOT NULL,
                   gun varchar(50)); -- Cıkarilabilir time                   

CREATE TABLE dil (dil varchar(255),
			      ogretmen_id int NOT NULL,
                  FOREIGN KEY (ogretmen_id) REFERENCES ogretmen(ogretmen_id));
                  
CREATE TABLE ogrenci(id int auto_increment PRIMARY KEY,
					 isim varchar(255),
                     soyisim varchar(255),
                     tc varchar(12),
                     tel varchar(15),
                     adres varchar(255),
                     odeme int);
                     
CREATE TABLE kayit(kayit_id int  auto_increment PRIMARY KEY,
				   ogrenci_id int NOT NULL,
				   FOREIGN KEY(ogrenci_id) REFERENCES ogrenci(id),
				   ders_id int NOT NULL,
                   FOREIGN KEY(ders_id) REFERENCES ders(ders_id),
                   pesin int NOT NULL
                   );

INSERT INTO kayit_elemani(eleman_username, eleman_password) VALUES('denemekayiteluser1', 'denemekayitelpass1');
INSERT INTO kayit_elemani(eleman_username, eleman_password) VALUES('denemekayiteluser2', 'denemekayitelpass2');

INSERT INTO sube(isim, derslik_kapasite, adres, tanitim) VALUES("esenler", 30, "bu bir adres deneme 1", "bu bir tanitim1");
INSERT INTO sube(isim, derslik_kapasite, adres, tanitim) VALUES("esenler2", 32, "bu bir adres deneme 2", "bu bir tanitim2");

INSERT INTO derslik(sube_id, kontenjan) VALUES(1, 50);

INSERT INTO ogretmen(isim, soyisim) VALUES('ogretmenaddeneme1', 'ogretmensoyisimdeneme1');

-- dil ve sube ismi ile ders ekleyebiliriz deneme amacli saat kontrolü vs. yapilmadi sube ekleme modulu yapmadigimiz icin
INSERT INTO ders(dil, sube_id, ogretmen_id, derslik_id, starttime, endtime, fiyat, gun) 
VALUES('ingilizce' ,(SELECT sube_id FROM sube WHERE isim='esenler'), 1, 1, '12:05:00', '13:05:00', 6000, 'cuma');

INSERT INTO ders(dil, sube_id, ogretmen_id, derslik_id, starttime, endtime, fiyat, gun) 
VALUES('ingilizce' ,(SELECT sube_id FROM sube WHERE isim='esenler'), 1, 1, '16:05:00', '17:05:00', 6000, 'persembe');

INSERT INTO ders(dil, sube_id, ogretmen_id, derslik_id, starttime, endtime, fiyat, gun) 
VALUES('fransizca' ,(SELECT sube_id FROM sube WHERE isim='esenler'), 1, 1, '14:05:00', '15:05:00', 3500, 'sali');

INSERT INTO ders(dil, sube_id, ogretmen_id, derslik_id, starttime, endtime, fiyat, gun)
VALUES('fransizca' ,(SELECT sube_id FROM sube WHERE isim='esenler2'), 1, 1, '14:05:00', '15:05:00', 4000, 'pazartesi');

INSERT INTO ders(dil, sube_id, ogretmen_id, derslik_id, starttime, endtime, fiyat, gun)
VALUES('rusca' ,(SELECT sube_id FROM sube WHERE isim='esenler2'), 1, 1, '09:05:00', '10:05:00', 4000, 'persembe');

INSERT INTO dil(dil, ogretmen_id) VALUES('ingilizce', 1);

-- ogrencide taksit sayisi tutuluyor her ders 6 taksit kabul edildi derse kayitedilirken pesin secerse odeme 0'a update edilecek
-- taksit secerse odeme degismeyecek taksit al ekranında her taksit alimi icin bir bir azaltilip 
-- ogrenci listeleme ekranında 6-odeme/6 seklinde odeme bilgisi verilecek
INSERT INTO ogrenci(isim, soyisim, tc, tel, adres, odeme) VALUES('denemeogisim1', 'soyaddeneme1', '43512373898', '5055051232', 'somewhereintheworld', 6);

INSERT INTO kayit(ogrenci_id, ders_id, pesin) VALUES((SELECT id FROM ogrenci WHERE tc='43512373898'), 1, 1);

-- Logini biraktim

-- ogrenci silme TODO once kayitlari silinir (ogrenci id sine esit olanlar) sonra ogrenci idsi ile ogrenci silinir
DELETE FROM kayit WHERE ogrenci_id=1;
DELETE FROM ogrenci WHERE id=1;

-- kayitli ogrenciye kurs ekleme kontenjan vs. kontrolleri eklenmedi dil-ogretmen-derslik-ders verileri var kabul edildi yukarıda da yapıldı ornegi
INSERT INTO kayit(ogrenci_id, ders_id, pesin) VALUES((SELECT id FROM ogrenci WHERE tc='43512373898'), 1, 1);

-- ogrenci kaydi yukarida var klasik insert

-- ogrenci listeleme olarak dusundum odemeyontemi bakacaz
SELECT ogrenci.isim, ogrenci.soyisim, ogrenci.tc, kayit.pesin FROM ogrenci,kayit WHERE ogrenci.id=(SELECT ogrenci_id FROM kayit);

-- sube listeleme
 -- her sube icin once dilleri almayi unutma
SELECT GROUP_CONCAT(ders.dil ORDER BY ders.dil SEPARATOR ', ') AS diller, sube.isim, sube.adres, sube.tanitim FROM sube, ders WHERE sube.sube_id=ders.sube_id GROUP BY sube.sube_id;

-- ders ismi ve subeismi ile (subeismi uniq databasede değil ama değiştirebiliriz önemsiz detay) dersleri listeleme
SELECT ders.dil ,ders.starttime, ders.endtime, ders.gun, ders.fiyat FROM sube, ders WHERE (SELECT sube.sube_id WHERE sube.isim ='esenler') AND ders.dil='ingilizce';

-- taksit bilgisi getirme bilgi ogrenci.odeme odenmemis taksit sayisi (fiyat bilgisi de kullanacaksak ders.fiyattan cekilebilir) verirken  odeme/taksit sayisi (seklinde taksit sayisi 6 normalde eger degisken olacaksa ogrenci.odeme ve ogrenci.taksitsay seklinde veritabanini degistirebilirsiniz) verilebilir.
SELECT ogrenci.odeme, ders.dil FROM ogrenci, ders WHERE ogrenci.id = (SELECT ogrenci.id FROM ogrenci WHERE ogrenci.tc = '43512373898')
 AND ders.ders_id = (SELECT kayit.ders_id FROM kayit WHERE ogrenci_id = (SELECT ogrenci.id FROM ogrenci WHERE ogrenci.tc = '43512373898'));

-- taksit alma durumunda ne yapilacak ogrenci idsi ile onceden 0 olup olmadigi kontrol edilip ona göre taksit al butonu devre disi birakilabilir vs. bu queryde sonuc en az 0 geliyor
UPDATE ogrenci SET ogrenci.odeme = GREATEST(0 ,ogrenci.odeme - 1) WHERE ogrenci.id = (SELECT o.id FROM (SELECT * FROM ogrenci) as o WHERE o.tc = '43512373898');

-- kurs secme ekranında gelecek dersler bilgiler eklenebilir cıkarilabilir fazla veya eksik olduysa
SELECT ders.dil, sube.isim, ders.gun, ders.starttime, ders.endtime, ders.fiyat FROM ders, sube WHERE ders.sube_id = sube.sube_id ORDER BY ders.dil; 

-- silme kontrolu deneme
SELECT IFNULL( (SELECT kayit_id FROM kayit WHERE ogrenci_id = (SELECT ogrenci_id FROM ogrenci WHERE tc = '43512373898') ) , -1);


                       
                       
					