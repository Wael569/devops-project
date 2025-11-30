import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";
import SubmitButton from "./SubmitButton";

function FormContainer() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    billet: "Standard",
    conditions: false,
  });

  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    console.log("Form data updated:", formData);
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await response.json(); // result removed (unused variable fix)

      if (response.ok) {
        setAlertMessage("Utilisateur ajouté avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          billet: "",
          conditions: false,
        });

        // Réactualisation automatique
        window.dispatchEvent(new Event("userInserted"));
      } else {
        setAlertMessage("Erreur lors de l'insertion !");
      }
    } catch (error) {
      console.error("Erreur :", error);
      setAlertMessage("Erreur serveur !");
    }
  };

  return (
    <>
      {alertMessage && (
        <div className="alert alert-info mt-3">{alertMessage}</div>
      )}

      <form className="mt-4" onSubmit={handleSubmit}>
        <InputField
          label="Nom"
          value={formData.nom}
          onChange={(val) => handleChange("nom", val)}
        />

        <InputField
          label="Prénom"
          value={formData.prenom}
          onChange={(val) => handleChange("prenom", val)}
        />

        <InputField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(val) => handleChange("email", val)}
        />

        <SelectField
          label="Type de billet"
          options={["Standard", "VIP", "Étudiant"]}
          value={formData.billet}
          onChange={(val) => handleChange("billet", val)}
        />

        <CheckboxField
          label="J'accepte les conditions"
          checked={formData.conditions}
          onChange={(val) => handleChange("conditions", val)}
        />

        <SubmitButton />
      </form>
    </>
  );
}

export default FormContainer;
