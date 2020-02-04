## Building-Restful-Api (Web Service) with Node.Js

### Web Servisler

Veri akışının platform bağımsız gerçekleşebilmesi için bir web servis mimarisine ihtiyaç duyulmaktadır. Bu veri akışının HTTP üzerinden sağlanması Remote Procedure Call olarak isimlendirilir.
 
 2 çeşit web servis mimarisi mevcuttur.

 ### 1- REST

 ### 2- SOAP

 Rest mimarisinde JSON,XML,TXT,HTML gibi veri tipleri gönderilebilirken Saop sadece XML veri tiplerini desteklemektedir.

 Rest Web servis mimarisi literatürüne uygun yazılan web servis mimarilerine RESTful web servis olarak adlandırılır.

 ### RESTFUL Web Servis

### 1.a- GET Metodu

Get metodu kullanıldığında istekler URL kısmından gönderilir.Gönderilen bilgiler URL' de görüntüleneceği için güvenlik riski yüksek bir metottur.

### 1.b- POST Metodu

POST metodunda da istekler URL kısmından gönderilir.Ancak GET metoduna göre hızlı ve daha güvenilirdir.

### 1.c- PUT Metodu

PUT metodunu bir formdaki verinin tamamını göndermek gerektiği durumda kullanırız.

### 1.d- PATCH Metodu

PATCH metodunu ise bir formda client sadece email' ini güncellemek isterse bu durumda patch kullanılmalıdır.

PATCH gereken ksımda PUT metodu kullanılmalıdır ki RESTful mimarisine bağlı kalmış olalım.

### 1.e- DELETE Metodu

DELETE metodu URL de belirlediğimiz resource'un tamamı ile silinmesi için kullanılan bir metotur.
