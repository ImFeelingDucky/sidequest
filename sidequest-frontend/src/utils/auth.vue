<script>
const apiUrl =
  "https://vuecookbook.netlify.com/.netlify/functions/product-name?name=";

const auth = new Vue({
  name: "auth",
  data: {
    errors: [],
    email: "",
    password: ""
  },
  methods: {
    checkForm(e) {
      e.preventDefault();

      this.errors = [];

      if (this.email === "") {
        this.errors.push("No Email provided.");
      } else {
        fetch(apiUrl + encodeURIComponent(this.email)).then(async res => {
          if (res.status === 204) {
            alert("OK");
          } else if (res.status === 400) {
            let errorResponse = await res.json();
            this.errors.push(errorResponse.error);
          }
        });
      }
    }
  }
});
export default {};
</script>