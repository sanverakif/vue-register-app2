<template>
  <div class="mainDiv">
    <div class="container">
      <v-form @submit.prevent="signUp" ref="form">
        <div class="form-group">
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            class="form-control"
            placeholder="userName"
            v-model="kullaniciAdi"
          />
          <small v-if="!$v.kullaniciAdi.required"
            >Kullanıcı Adi girişi boş olmamalıdır</small
          >
          <small v-else-if="!$v.kullaniciAdi.minLength"
            >Minumum 8 karakter girişi olmalıdır.</small
          >
        </div>
        <div class="form-group">
          <label>Mail Adresi</label
          ><input
            type="email"
            class="form-control"
            placeholder="abc@gmail.com"
            v-model="eMail"
          />
          <small v-if="!$v.eMail.required">Mail girişi boş olmamalıdır</small>
          <small v-if="!$v.eMail.email">Hatalı mail formatı</small>
        </div>
        <div class="form-group">
          <label>Şifre</label
          ><input
            type="password"
            class="form-control"
            placeholder="Şifre giriniz"
            v-model="sifre"
          />
          <small v-if="!$v.sifre.required">Şifre girişi boş olmamalıdır.</small>
          <small v-if="!$v.sifre.minLength"
            >Minimum 8 karakter girişi olmalıdır.</small
          >
          <small><password-meter :password="sifre" /></small>
          <!-- <small v-if="!$v.sifre.required">sifre girişi boş olmamalıdır</small>
          <small v-if="!$v.sifre.minLength"
            >sifre girişi belirtilen karakterde olmalıdır</small
          > -->
        </div>
        <div class="form-group">
          <label>Şifre Tekrarı</label
          ><input
            type="password"
            class="form-control"
            placeholder="Şifre tekrarı giriniz"
            v-model="sifreTekrar"
          />
          <!--Şifre güçlüğü için metini gizleyip yerine geçme?? araştır-->
          <small id="smallSifreTekrar1" v-if="!$v.sifreTekrar.required"
            >Şifre tekrarı boş olmamalıdır.</small
          >
          <small id="smallSifreTekrar2" v-if="!$v.sifreTekrar.minLength"
            >Minimum 8 karakter girişi olmalıdır.</small
          >
          <small><password-meter :password="sifreTekrar" /></small>

          <!-- <small v-if="$v.sifreOnayla && !$v.sifreOnayla.sameAsPassword"
            >şifre eşleşti?</small
          > -->

          <!--NonNullable: ne için kullanılıyor?-->
          <!-- <small v-if="sifreTekrar == sifre && NonNullable">Şifreler uyuşmaktadır.</small> -->
          <small
            v-if="
              !$v.sifreTekrar.sameAsPassword && !$v.sifreTekrar.sameAsPassword
            "
            >Şifreler uyuşmamaktadır</small
          >

          <small v-if="$v.sifreTekrar.required && $v.sifreTekrar.sameAsPassword"
            >Şifreler uyuşmaktadır</small
          >
        </div>
        <div class="form-group">
          <vbtn class="btn btn-success">Gönder</vbtn>
          <vbtn class="btn btn-danger" style="margin-left: 10px">Temizle</vbtn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
//şifre güçlüğü
import passwordMeter from "vue-simple-password-meter";
//keyword kullanımları
import { required, email, minLength } from "vuelidate/lib/validators";
//şifre eşitleme
import sameAs from "vuelidate/lib/validators/sameAs";
export default {
  name: "RegisterView",
  components: { passwordMeter },
  data() {
    return {
      elementGizleme: true,
      kullaniciAdi: "",
      eMail: "",
      sifre: "",
      sifreTekrar: "",
    };
  },
  validations: {
    kullaniciAdi: {
      required,
      minLength: minLength(8),
    },
    eMail: {
      required,
      email,
    },
    sifre: {
      required,
      minLength: minLength(8),
    },
    sifreTekrar: {
      required,
      minLength: minLength(8),
      sameAsPassword: sameAs("sifre"),
    },
    // sifreOnayla: {
    //   required,
    //   minLength: minLength(8),
    //   sameAsPassword: sameAs("sifre"),
    // },
  },
  methods: {
    signUp: function (_kullaniciAdi, _eMail, _sifre, sifreOnayla) {
      _kullaniciAdi = this.kullaniciAdi;
      _eMail = this.eMail;
      _sifre = this.sifre;
      sifreOnayla = this.sifreOnayla;

      return _kullaniciAdi, _eMail, _sifre, sifreOnayla;
    },
    signUpClear: function () {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.mainDiv {
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
  width: 400px;
  height: 540px;
}
.form-group {
  margin-top: 20px;
}
</style>
