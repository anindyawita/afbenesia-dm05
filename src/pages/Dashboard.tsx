import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/dashboard.css";

interface Participant {
  id: string;
  name: string;
  institution: string;
  paymentStatus: "Lunas" | "Belum Bayar";
}

// Dummy data peserta
const initialParticipants: Participant[] = [
  {
    id: "",
    name: "Ahmad Fauzi",
    institution: "Universitas Indonesia",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Siti Nurhaliza",
    institution: "Startup Digital",
    paymentStatus: "Belum Bayar",
  },
  {
    id: "",
    name: "Budi Santoso",
    institution: "PT Maju Jaya",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Rina Kusuma",
    institution: "Freelancer",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Dedi Prasetyo",
    institution: "CV Kreatif Media",
    paymentStatus: "Belum Bayar",
  },
  {
    id: "",
    name: "Linda Wijaya",
    institution: "Institut Teknologi Bandung",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Eko Saputra",
    institution: "E-commerce Startup",
    paymentStatus: "Belum Bayar",
  },
  {
    id: "",
    name: "Maya Sari",
    institution: "PT Digital Solusi",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Rizky Pratama",
    institution: "Universitas Gadjah Mada",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Dewi Lestari",
    institution: "Marketing Agency",
    paymentStatus: "Belum Bayar",
  },
  {
    id: "",
    name: "Andi Wijaya",
    institution: "PT Sukses Mandiri",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Fitri Handayani",
    institution: "Freelancer",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Hendra Gunawan",
    institution: "Startup Teknologi",
    paymentStatus: "Belum Bayar",
  },
  {
    id: "",
    name: "Nurul Hidayah",
    institution: "Universitas Brawijaya",
    paymentStatus: "Lunas",
  },
  {
    id: "",
    name: "Agus Setiawan",
    institution: "PT Global Media",
    paymentStatus: "Lunas",
  },
];

// Generate ID dengan format AFB-DM05-XXX
const generateParticipantId = (index: number): string => {
  const paddedNumber = String(index + 1).padStart(3, "0");
  return `AFB-DM05-${paddedNumber}`;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "Lunas" | "Belum Bayar"
  >("all");
  const [sortBy, setSortBy] = useState<"name" | "institution" | "status">(
    "name",
  );

  // Add ID to participants
  const participants: Participant[] = initialParticipants.map((p, index) => ({
    ...p,
    id: generateParticipantId(index),
  }));

  const handleLogout = () => {
    if (confirm("Yakin ingin logout?")) {
      logout();
      navigate("/login");
    }
  };

  // Filter and sort logic
  const filteredParticipants = useMemo(() => {
    let filtered = [...participants];

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.id.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by payment status
    if (filterStatus !== "all") {
      filtered = filtered.filter((p) => p.paymentStatus === filterStatus);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "institution":
          return a.institution.localeCompare(b.institution);
        case "status":
          return a.paymentStatus.localeCompare(b.paymentStatus);
        default:
          return 0;
      }
    });

    return filtered;
  }, [participants, searchQuery, filterStatus, sortBy]);

  // Statistics
  const totalParticipants = participants.length;
  const paidParticipants = participants.filter(
    (p) => p.paymentStatus === "Lunas",
  ).length;
  const unpaidParticipants = totalParticipants - paidParticipants;
  const paymentRate = Math.round((paidParticipants / totalParticipants) * 100);

  // Export to CSV
  const exportToCSV = () => {
    if (filteredParticipants.length === 0) {
      alert("⚠️ Tidak ada data untuk diekspor!");
      return;
    }

    const csvContent = [
      ["ID Peserta", "Nama", "Instansi/Kategori", "Status Pembayaran"],
      ...filteredParticipants.map((p) => [
        p.id,
        p.name,
        p.institution,
        p.paymentStatus,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `peserta-dm05-${new Date().getTime()}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(
      `✅ Berhasil mengekspor ${filteredParticipants.length} data peserta!`,
    );
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="nav-container">
          <h2 className="logo">Afbenesia Dashboard</h2>
          <div className="nav-right">
            <span className="user-badge">👤 Admin</span>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="container">
          {/* Header */}
          <div className="dashboard-header">
            <div>
              <h1>Data Peserta</h1>
              <p>Kelas Kilat Digital Marketing - Batch 05</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <h3>{totalParticipants}</h3>
                <p>Total Peserta</p>
              </div>
            </div>
            <div className="stat-card success">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>{paidParticipants}</h3>
                <p>Sudah Bayar</p>
              </div>
            </div>
            <div className="stat-card danger">
              <div className="stat-icon">⏳</div>
              <div className="stat-content">
                <h3>{unpaidParticipants}</h3>
                <p>Belum Bayar</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>{paymentRate}%</h3>
                <p>Tingkat Pembayaran</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="controls-panel">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Cari nama, instansi, atau ID peserta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(
                    e.target.value as "all" | "Lunas" | "Belum Bayar",
                  )
                }
                className="filter-select"
              >
                <option value="all">Semua Status</option>
                <option value="Lunas">Lunas</option>
                <option value="Belum Bayar">Belum Bayar</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "name" | "institution" | "status")
                }
                className="filter-select"
              >
                <option value="name">Urutkan: Nama</option>
                <option value="institution">Urutkan: Instansi</option>
                <option value="status">Urutkan: Status</option>
              </select>
              <button onClick={exportToCSV} className="btn-export">
                📥 Export CSV
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            {filteredParticipants.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🔍</div>
                <h3>Tidak ada data ditemukan</h3>
                <p>Coba ubah filter atau pencarian Anda</p>
              </div>
            ) : (
              <table className="participants-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>ID Peserta</th>
                    <th>Nama</th>
                    <th>Instansi/Kategori</th>
                    <th>Status Pembayaran</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants.map((participant, index) => (
                    <tr
                      key={participant.id}
                      className={
                        participant.paymentStatus === "Belum Bayar"
                          ? "unpaid-row"
                          : ""
                      }
                    >
                      <td>{index + 1}</td>
                      <td>
                        <span className="id-badge">{participant.id}</span>
                      </td>
                      <td>
                        <strong>{participant.name}</strong>
                      </td>
                      <td>{participant.institution}</td>
                      <td>
                        <span
                          className={`status-badge ${
                            participant.paymentStatus === "Lunas"
                              ? "status-paid"
                              : "status-unpaid"
                          }`}
                        >
                          {participant.paymentStatus === "Lunas" ? "✓" : "⏳"}{" "}
                          {participant.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Footer Info */}
          <div className="table-footer">
            <p>
              Menampilkan {filteredParticipants.length} dari {totalParticipants}{" "}
              peserta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
