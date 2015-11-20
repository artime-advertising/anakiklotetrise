_ = lodash;
Schema = {};

Schema.userProfile = new SimpleSchema({
  fullName: {
    type: String,
    label: "Ονομα & Επώνυμο",
    autoform: {
      afFieldInput: { type: "text" }
    }
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
    autoform: {
      afFieldInput: { type: "email" }
    }
  },
  telephone: {
    type: String,
    label: "Τηλέφωνο",
    max: 10,
    regEx: /^([0-9]{10})$/,
    autoform: {
      afFieldInput: { type: "text" }
    }
  },
  address: {
    type: String,
    label: "Διεύθυνση",
    autoform: {
      afFieldInput: { type: "textarea", rows: 8}
    }
  },
  acceptTerms: {
    type: Boolean,
    label: "Αποδέχομαι τους όρους συμμετοχής",
    autoform: {
      afFieldInput: { type: "boolean-checkbox" }
    },
    custom: function() {
      var result = "termsShouldBeAccepted";
      if (this.value == true) {
        result = null;
      }
      return result;
    }
  }
});

Schema.userProfile.messages({
  "termsShouldBeAccepted": "Είναι απαραίτητο να τους αποδεχθείτε.",
  "required": "Είναι απαραίτητο.",
  "regEx email": "Το email δεν είναι έγκυρο.",
  "regEx telephone": "Γράψτε το τηλέφωνο χωρίς κενά, σύμβολα ή γράμματα!"
});
