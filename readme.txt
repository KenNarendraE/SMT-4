-------------------Attack Defense LKS Cyber Security------------------------

+Reconnaissance
	1. Whatweb
	2. Nmap
	3. Whois

+Reverse Engineering
	1. IDA

+Web server based attack
	
	1. Deface
	2. SSH Bruteforce Attack
	3. Directory Traversal
	4. DDOS
	5. DNS Server hijacking
	6. Man In the Middle
	7. HTTP Response Splitting Attack

+Web Client based attack

	1. XSS
	2. File Upload
	3. Command Injection
	4. RCE 

+Database based attack
	
	1. SQL injection
	2. Previlege Escalation
	3. Bruteforce SSH
	4. File Upload

------------------------------DVWA---------------------------------------------

+Install DVWA
	1. Install Apache2/Nginx
	2. Install Mysql
	3. Git clone https://github.com/digininja/DVWA.git
	4. Buka mysql dan tambahkan user baru dengan > create user dvwa_test;
	5. Memperbolehkan akses akses user dengan > grant all on db_dvwa.* to dvwa_test@locahost identified by 'password';
	6. Flush Privileges;
	7. Ijinkan akses user dengan > grant all on db_dvwa.* to 'dvwa_test'@'%';
	8. Flush privileges;
	9. Ganti nama file config.inc.php.dist menjadi config.inc.php didalam folder dvwa
	10. sesuaikan db_server, db_database, db_user, db_password dengan yang tadi di masukkan kedalam mysql
	11. restart service php dan mysql
	12. buka localhost dan masuk kedalam direktori dvwa

+XSS--------------------------+----------------------------------+----------------
	| XSS adalah singkatan dari istilah cross site scripting, 
	| merupakan salah satu jenis serangan injeksi code , 
	| yang dapat dilakukandengan cara memasukkan code 
	| HTML atau client script code lainnya kedalam suatu situs.
	
	(Reflected)
	# Low
	1. Pertama nyalakan Mysql dan Apache2 agar DVWA dapat di akses
	2. Set pada settingan low terlebih dahulu
	3. Pilih menu XSS (reflected)
	4. Coba masukkan tag html sederhana seperti <h1>halo</h1>
	5. Jika output h1 yang dihasilkan benar, maka kita bisa lanjut ke script selanjutnya
	6. Sekarang masukkan <script>alert(document.cookie)</script>
	7. apakah muncul alert? jika muncul kita bisa maju ke level berikutnya
	
	#Medium
	8. Sekarang ganti level ke medium dan pilih menu XSS reflected lagi
	9. masukkan kembali <script>alert(document.cookie)</script>
	10. apakah sudah muncul alert? jika tidak berarti keamanan sudah ditambah, dan tidak bisa menggunakan <script> lagi
	11. sekarang coba ubah <script> menjadi capslock <SCRIPT>
	12. apakah sekarang sudah muncul? jika sudah berarti cara diatas berhasil, pengaman pada level medium ini hanya mendeteksi <script>,
	namun tidak dengan capslock
	13. sekarang bisa lanjut ke level high

	#High
	14. setelah menaikkan ke level high, sekarang coba isi <SCRIPT> seperti tadi, apakah bisa muncul?
	15. jika tidak berarti sudah tidak bisa menggunakan <script> maupun <SCRIPT>, lalu bagaimana cara mengatasinya?
	16. coba masukkan script ini <body onload=alert(document.cookie)>
	17. apakah sudah muncul? jika sudah maka cara tersebut berhasil, arti dari script tersebut adalah, ketika body sedang di load ke website,
	maka jalankan alert(document.cookie)
	
	(Stored)
	#Low
	1. Pertama cek validasi terhadap kolom name, apakah ada batasan panjang text? jika ada maka inspect element dan edit lengtnya menjadi 100
	2. masukan <script>alert(document.cookie)</script>
	3. apakah ada alert yang muncul jika ada maka xss sudah sucsess
	
	#Medium
	1. Pertama cek validasi terhadap kolom name, apakah ada batasan panjang text? jika ada maka inspect element dan edit lengtnya menjadi 100
	2. masukan <script>alert(document.cookie)</script>
	3. apakah ada alert yang muncul jika ada maka xss sudah sucsess, jika tidak ada maka validasi sudah ditambahkan
	4. tambahkan huruf besar terhadap syntax script = <Script>alert(document.cookie)</sCript>
	5. sucsess
	
	#High
	1. system memberkan validasi terhadap huruf besar agar tidak mudah disusupi script, agar bisa disusupi maka kita akan menggunakan syntax lain
	2. coba masukkan script ini <body onload=alert(document.cookie)>
	
	(DOM)
	#Low
	1. masukan URL = <script>alert(document.cookie)</script>
	2. apakah berhasil ? jika berhasil maka xss complete
	
	#Medium
	1. masukan URL = <script>alert(document.cookie)</script>
	2. apakah berhasil ? jika berhasil maka xss complete jika belum lanjutkan langkah langkahnya
	3. keluarkan position url dari option dan select kemudian
	tambahkan perintahnya)
	4.coba ganti url dengan syntax tersebut default=English"></option></select><body onload=alert(document.cookie)>
	
	#High
	1. # adalah tanda untuk section Pada file Html, tambahkan # komponen pada url sebelum tag script untuk menyerang website
	2. URL = (default=English#<script>alert(document.cookie)</script>)

+SQL Injection--------------------------+----------------------------------+----------------
	# Low
	1. Pertama gunakan fugsi tersebut dengan baik apakah muncul hasil atau tidak
	2. jika muncul masukan syntax (') untuk mengetahui apakah form tersebut bisa disusupi atau tidak
	3. asumsikan syntax sqlnya dalam hal ini syntax sql berarti 
	   SELECT nama_awal nama_akhir FROM <suatu table> WHERE id = '<input user>'
	4. maka kita bisa masukan 1' OR true # apakah bisa disusupi ? jika iya lanjutkan langkah berikut
	5. kita akan melihat database apa yang digunakan dengan cara 1' UNION SELECT database(),2 #
	6. didalam database terhadap information schema untuk mengetahui table apa yang digunakan oleh website tersebut
	7. 1' UNION SELECT TABLE_NAME,COLUMN_NAME from information_schema.`COLUMNS` WHERE TABLE_SCHEMA='db_dvwa'#
	   => hasilnya
	      first name: users<= nama table
	      surname: password<= nama column
	8. dan bisa dilihat ternyata nama tablenya adalah users dan terdapat column yang bernama password
	9. 1' UNION SELECT user,password FROM users# dan password hash sudah ditemukan

	#Medium
	1. dalam kasus ini keamanan sudah ditambahkan dengan tidak menggunakan form melainkan option
	2. kita akan menggunakan sebuah tool yang bernama burpsuite
	3. pertama ganti proxy Web browser menjadi 127.0.0.1 dan port 8080 untuk bisa mengexploitasi website dan aktifkan intercept
	4. Lakukan perintah atau mengsubmit id pada web DVWA dan lihat pada burpsuite
	5. buka burpsuite dan arahkan pada menu proxy
	5. id=1&Submit=Submit terdapat syntax tersebut
	6. klik kanan pada brupsuite dan pilih send to repeater dan pindah menu repeater
	7. edit syntax tersebut menjadi id=1 UNION SELECT user,password FROM users#&Submit=Submit kemudian send
	8. lalu matikan intercept dan kembali ke dvwa apakah berhasil ?
	
	#High
	1. pada kasus ini sama seperti yang low hanya saja berbeda browser
	2. anda hanya perlu menginputkan 1' UNION SELECT user,password FROM db_dvwa.`users`#

+SQL Injection:BLIND--------------------------+----------------------------------+----------------
	#Low 
	1. Pertama gunakan fugsi tersebut dengan baik apakah muncul hasil atau tidak
	2. jika tidak maka terpaksa kita harus menggunakan Tool
	3. buka brupsuite dan nyalakan intercept pada burpsuite
	4. ganti proxy Web browser menjadi 127.0.0.1 dan port 8080 untuk bisa mengexploitasi website dan aktifkan intercept
	5. Lakukan perintah atau mengsubmit id pada web DVWA dan lihat pada burpsuite
	6. kita tidak menemukan apapun kecuali cookie, simpan cookienya
	7. selanjutnya copy URL pada DVWA sqlinjection(blind) low
	8. lalu buka Sqlmap dengan cara memasukan sqlmap -u "url_dvwa" --cookie="cookie brupsuite" --dbs pada terminal
	9. dan bisa dilihat ada database
	   *db_dvwa
	10. Masuk pada database db_dvwa dan juga cari table di dalamnya
	11. sqlmap -u "url_dvwa" --cookie="security=low; PHPSESSID=hkbg7r1bv8b4ejeo66p10qo5hq" -D db_dvwa --tables
	12. kita bisa lihat kembali terdapat beberapa table salah satunya users
	13. masuk pada table users dan cari kolomnya
	    sqlmap -u "url_dvwa" --cookie="security=low; PHPSESSID=hkbg7r1bv8b4ejeo66p10qo5hq" -D db_dvwa -T users --columns
	14. dan bisa dilihat terdapat beberapa kolom salah satunya password dan user kita dapat melihat password user tersebut
	    sqlmap -u "url_dvwa" --cookie="security=low; PHPSESSID=hkbg7r1bv8b4ejeo66p10qo5hq" -D db_dvwa -T users -C user,password --dump
	15. dengan memasukan tersebut maka akan terlhat password berdasarkan encryptnya

+File Upload----------------------------+----------------------+---------------------------

#Low

	1. Pertama nyalakan terlebih dahulu service mysql dan apache2
	2. buka localhost/DVWA dan login
	3. Kemudian pilih level low dan buka menu File upload
	4. terdapat button browse dan upload
	5. tekan button browse untuk memilih gambar yang akan di upload
	6. sekarang tekan tombol upload
	8. jika sudah berhasil di upload akan muncul tulisan succesfully uploaded
	9. coba copy link disamping tulisan tersebut dan pastekan di tab browser kalian disamping DVWA/
	10. jika sudah benar maka kalian sekarang bisa melihat gambar yang sudah di upload
	11. namun bagaimana jika yang di upload bukan gambar melainkan sebuah payload untuk memberikan perintah ke server?
	12. sekarang cobalah buat file php yang berisi <?php system($_GET['input']); ?>
	13. fungsi syntax php tersebut adalah untuk membaca perintah yang diketikkan didalam url 
	14. setelah selesai membuat script diatas kembali lagi ke DVWA dan upload file php tersebut
	15. Setelah ter upload copy link yang terdapat di samping tulisan succesfully uploaded dan paste disamping url DVWA
	16. jika link yang dibuka sudah benar, maka dalam halaman web tersebut tidak muncul apa apa, alias blank
	17. sekarang tambahkan ?input=ls
	18. jika berhasil maka folder atau file server akan muncul di web tersebut, kalian juka bisa menggunakan perintah linux lainnya
	

+CSRF----------------------------------+--------------------+-------------------------------

	| CSRF adalah jenis serangan exploitasi berbahaya terhadap pengguna aplikasi web.
	| CSRF memungkinkan penyerang melakukan permintaan HTTP POST/GET yang tidak sah atas nama korban yang saat ini di autentikasi oleh web.
	| CSRF adalah serangan yang digunakan untuk meng implementasikan permintaan yang tidak sah  selama tindakan yang memerlukan login atau autentikasi pengguna.
	| Serangan CSRF dapat memanfaatkan ID session, cookie, serta kerentanan berbasis server lainnya untuk mencuri kredensial pengguna
	
#Low
	
	1. Pertama nyalakan dahulu service apache2 dan mysql lalu buka localhost DVWA
	2. pilih tingkatan level low dan klik menu csrf
	3. disitu terdapat kolom yang berguna untuk mengganti password dvwa kalian
	4. Sekarang coba ganti password dvwa kalian dengan yang baru
	5. setelah itu logout dari dvwa
	6. masukkan username dan password baru kalian yang baru saja diganti
	7. jika password kalian benar maka akan masuk ke menu dvwa seperti biasa
	8. Sekarang coba buka kembali menu csrf dan buga page source
	9. coba cari tag <form> dan copy sampai tag form tutup </form>
	10. buat file .html dan pastekan copy an tadi
	11. sekarang hapus # pada action form
	12. copy link dari page csrf dvwa dan pastekan kedalam action form
	13. setelah itu save file .html dan buka di browser
	14. jika benar akan muncul form mengganti password
	15. kemudian isi dengan password baru yang ingin kalian pakai, lalu submit
	16. setelah itu logout dari dvwa dan login kembali dengan password baru kalian
	17. jika berhasil maka kalian sudah bisa login kembali kedalam dvwa

#Medium

	1. sekarang ganti ke tingkatan dvwa medium
	2. coba kembali cara yang tadi dengan mengubah password melalui file html yang kita buka di browse
	3. masukkan pasword baru dan submit, apakah berhasil?
	4. ternyata kita akan terlempar ke halaman utama csrf dan terdapat tulisan "that request didn't look correct" yang berarti penggantian password gagal
	5. sekarang kita gunakan cara baru yaitu dengan meng copy link pada halaman yang terdapat pesan gagal tadi, perlu diingat link yang dicopy tidak termasuk text localhost
	6. sekarang kita beralih ke menu XSS stored dan ketik <img src="#"> pada kolom nama
	7. jika saat pengetikan tidak dapat diteruskan (di blok) coba buka inspect element dan hapus pembatas huruf yang dapat di isi pada kolom nama, kemudian lanjut masukkan script tadi 
	8. sekarang hapus * didalam img src dan pastekan link yang tadi telah di copy, kemudian submit
	9. jika berhasil maka akan muncul gambar yang terlihat seperti gagal di upload namun script tersebut sudah dijalankan
	10. sekarang coba logout dvwa dan login menggunakan password yang tadi telah diganti
	11. apakah sudah berhasil?

#High

	1. setelah kedua level tadi sudah di selesaikan, sekarang ubah ke level high 
	2. sebenarnya pada level high ini kita hanya perlu menambahkan user_token pada form ganti password
	3. oleh karena itu pada page csrf buka page source, cari form untuk mengganti password
	4. didalam tag form terdapat tag input user_token, copy semua tag tersebut
	5. buka file .html yang pada level low sudah dibuat, dan pastekan input user_token dibawah input submit
	6. save file dan buka file html tersebut di browser kalian
	7. ganti password lagi sesuai keinginan kalian dan submit
	8. logout dvwa dan login dengan password baru tadi
	9. jika semua cara sudah benar, seharusnya kalian sudah bisa login sekarang

+Command Injection-------------------+--------------------+----------------------+-----------

	| Command injection adalah serangan yang memanfaatkan kerentanan format string yang terjadi ketika input pengguna yang tidak di filter lalu diteruskan ke shell sistem.
	| Seorang penyerang dapat mengeksploitasi kerentanan ini dengan urutan perintah yang ditambahkan ke format yang sesuai untuk mengeksekusi perintah shell, Penyerang juga memungkinkan memiliki remote-shell.
	| Perbedaan antara Command Injection dengan RCE adalah, jika RCE merupakan kode pemrograman yang di eksekusi, sedangkan Command Injection merupakan perintah os yang di eksekusi

#Low
	1. Pertama nyalakan terlebih dahulu service apache2 dan mysql
	2. buka DVWA dan set ke tingkatan Low
	3. Pilih menu Command injection
	4. masukkan alamat ip yang akan di ping di kolom yang teersedia, disini saya menggunakan 127.0.0.1, kemudian klik submit
	5. Jika berhasil maka akan muncul hasil ping dibawah kolom
	6. kemudian buka view source di pojok kanan bawah, disitu terlihat jelas bahwa command yang dimasukkan adalah ping -c 4, dan tidak memiliki pelindung apapun
	7. yang berarti kita masih bisa menggabungkan perintah lain setelah perintah tersebut
	8. sekarang coba ulang masukkan 127.0.0.1 && ls didalam kolom dan tekan submit
	10. jika benar maka akan muncul hasil ping dan list file dibawah kolom, itu terjadi karena && adalah sebuah gerbang AND yang berarti menjalankan kedua command
	11. kalian juga bisa mengkombinasikan perintah lain seperti cat, ls ../, rm , dll
	
#Medium
	1. Setelah menyelesaikan keamanan Low sekarang ganti ke medium dan kita coba lagi dengan cara tadi
	2. isi kolom dengan 127.0.0.1 && ls
	3. apakah bisa keluar hasilnya? jika tidak bisa berarti sekarang keamanannya sudah ditambah dan cara tadi sudah tidak bisa digunakan
	4. sekarang kita coba gerbang logika lainnya yaitu OR dengan simbol | 
	5. masukkan kembali 127.0.0.1 | ls
	6. sekarang apakah sudah terlihat hasilnya?, jika benar maka akan muncul daftar file yang ada didalam direktori tersebut
	
#Hard
	1. jika sudah menyelesaikan kedua level diatas sekarang coba ke hard
	2. setelah mengubah ke hard coba masukkan lagi 127.0.0.1 | ls
	3. apakah bisa muncul? jika tidak bisa berarti pada level hard ini sudah dipasangi pembatas untuk mengatasi gerbang logika diatas
	4. sekarang coba liat view source di pojok kanan bawah
	5. disitu terlihat terdapat substitution yang berarti akan menukar string tertentu menjadi spasi, seperti &,;,| ,-,$,(,),`,||
	6. dari filter substitution diatas terlihat bahwa masih ada beberapa gerbang logika yang masih belum ter filter yaitu '|'
	7. mari kita coba memasukkan 127.0.0.1 |ls
	8. command diatas memang terlihat mirip namun memiliki sebuah perbedaan, yaitu tidak terdapat spasi di anatara | dan ls
	9. dan hasilnya command tersebut berhasil dijalankan
	
	
	
----------------------------------GANTI PREMISSION FILE ATAU FOLDER--------------------------------------------------------------------------------------------------------------------------------------------
Value		Numeric Value		Explanation

-rw——-		600		Pemilik bisa membaca dan menulis.
-rw-r–r–	644		Pemilik bisa membaca dan menulis, group dan orang lain bisa membaca.
-rw-rw-rw-	666		Pemilik, kelompok dan others bisa membaca dan menulis.
-rwx——		700		Pemilik bisa membaca, menulis dan mengeksekusi, group dan yang lainnya tidak bisa melakukan apapun dengan file tersebut.
-rwx–x–x	711		Pemilik bisa membaca, menulis dan mengeksekusi, kelompok dan orang lain bisa mengeksekusi.
-rwxr-xr-x	755		Pemilik bisa membaca, menulis dan mengeksekusi, kelompok dan orang lain bisa membaca dan mengeksekusi.
-rwxrwxrwx	777		Pemilik, kelompok dan orang lain bisa membaca, menulis dan melaksanakan.

contoh : chmod 700 anu.txt

----------------------------------PERINTAH DASAR MYSQL-----------------------------------------------------------------------------------------------------------------------------------------------------------
	
1. Membuat database :

	create database anu;

2. Melihat database :

	show databases;

3. Masuk ke database :

	use anu;

4. Menghapus database :

	drop database anu;

5. Membuat tabel ;

	create table anu;

6. Melihat detail tabel :

	describe anu;

7. Menghapus tabel :

	drop table anu;

8. Menambah user :
	
	create user 'user'@'localhost' IDENTIFIED BY 'password';

9. Mengizinkan user :

	GRANT ALL PRIVILEGES ON * database.tabel * TO 'user'@'localhost';

10. Menghapus User :
																						
	DROP USER 'user'@'localhost';


	
	
	
	
	
	
