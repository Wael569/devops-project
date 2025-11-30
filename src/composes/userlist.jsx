import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Charger les utilisateurs depuis le backend
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erreur chargement utilisateurs :", err));
  }, []);

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {

      try {
        await fetch(`http://localhost:5000/api/users/${id}`, {
          method: "DELETE"
        });
        setUsers(users.filter(u => u.id !== id));
      } catch (error) {
        console.error("Erreur suppression :", error);
      }
    }
  };

  // Activer le mode édition
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Mettre à jour un utilisateur
  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:5000/api/users/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUser)
      });
      setUsers(users.map(u => u.id === editingUser.id ? editingUser : u));
      setEditingUser(null);
    } catch (error) {
      console.error("Erreur mise à jour :", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Liste des utilisateurs</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Billet</th>
            <th>Conditions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.nom}</td>
              <td>{u.prenom}</td>
              <td>{u.email}</td>
              <td>{u.billet}</td>
              <td>{u.conditions ? "✔️" : "❌"}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(u)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(u.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulaire de modification */}
      {editingUser && (
        <div className="card mt-4 p-3">
          <h4>Modifier l’utilisateur</h4>

          <input
            type="text"
            className="form-control mb-2"
            value={editingUser.nom}
            onChange={(e) => setEditingUser({ ...editingUser, nom: e.target.value })}
          />

          <input
            type="text"
            className="form-control mb-2"
            value={editingUser.prenom}
            onChange={(e) => setEditingUser({ ...editingUser, prenom: e.target.value })}
          />

          <input
            type="email"
            className="form-control mb-2"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
          />

          <input
            type="text"
            className="form-control mb-2"
            value={editingUser.billet}
            onChange={(e) => setEditingUser({ ...editingUser, billet: e.target.value })}
          />

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={editingUser.conditions}
              onChange={(e) =>
                setEditingUser({ ...editingUser, conditions: e.target.checked })
              }
            />
            <label className="form-check-label">Conditions acceptées</label>
          </div>

          <button className="btn btn-success me-2" onClick={handleUpdate}>
            Enregistrer
          </button>

          <button className="btn btn-secondary" onClick={() => setEditingUser(null)}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );
}

export default UserList;
