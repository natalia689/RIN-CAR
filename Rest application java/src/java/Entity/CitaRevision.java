/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author aalex
 */
@Entity
@Table(name = "cita_revision")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "CitaRevision.findAll", query = "SELECT c FROM CitaRevision c")
    , @NamedQuery(name = "CitaRevision.findByCitarevisionID", query = "SELECT c FROM CitaRevision c WHERE c.citarevisionID = :citarevisionID")
    , @NamedQuery(name = "CitaRevision.findByFechaCita", query = "SELECT c FROM CitaRevision c WHERE c.fechaCita = :fechaCita")
    , @NamedQuery(name = "CitaRevision.findByTipoCita", query = "SELECT c FROM CitaRevision c WHERE c.tipoCita = :tipoCita")
    , @NamedQuery(name = "CitaRevision.findByTemaCita", query = "SELECT c FROM CitaRevision c WHERE c.temaCita = :temaCita")
    , @NamedQuery(name = "CitaRevision.findByCostoCita", query = "SELECT c FROM CitaRevision c WHERE c.costoCita = :costoCita")})
public class CitaRevision implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Basic(optional = false)
    @Column(name = "cita_revisionID")
    private Integer citarevisionID;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_cita")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCita;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tipo_cita")
    private String tipoCita;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "tema_cita")
    private String temaCita;
    @Basic(optional = false)
    @NotNull
    @Column(name = "costo_cita")
    private double costoCita;
    @JoinColumn(name = "id_ccliente", referencedColumnName = "usuarioID")
    @ManyToOne(optional = false)
    private Usuario idCcliente;

    public CitaRevision() {
    }

    public CitaRevision(Integer citarevisionID) {
        this.citarevisionID = citarevisionID;
    }

    public CitaRevision(Integer citarevisionID, Date fechaCita, String tipoCita, String temaCita, double costoCita) {
        this.citarevisionID = citarevisionID;
        this.fechaCita = fechaCita;
        this.tipoCita = tipoCita;
        this.temaCita = temaCita;
        this.costoCita = costoCita;
    }

    public Integer getCitarevisionID() {
        return citarevisionID;
    }

    public void setCitarevisionID(Integer citarevisionID) {
        this.citarevisionID = citarevisionID;
    }

    public Date getFechaCita() {
        return fechaCita;
    }

    public void setFechaCita(Date fechaCita) {
        this.fechaCita = fechaCita;
    }

    public String getTipoCita() {
        return tipoCita;
    }

    public void setTipoCita(String tipoCita) {
        this.tipoCita = tipoCita;
    }

    public String getTemaCita() {
        return temaCita;
    }

    public void setTemaCita(String temaCita) {
        this.temaCita = temaCita;
    }

    public double getCostoCita() {
        return costoCita;
    }

    public void setCostoCita(double costoCita) {
        this.costoCita = costoCita;
    }

    public Usuario getIdCcliente() {
        return idCcliente;
    }

    public void setIdCcliente(Usuario idCcliente) {
        this.idCcliente = idCcliente;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (citarevisionID != null ? citarevisionID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof CitaRevision)) {
            return false;
        }
        CitaRevision other = (CitaRevision) object;
        if ((this.citarevisionID == null && other.citarevisionID != null) || (this.citarevisionID != null && !this.citarevisionID.equals(other.citarevisionID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.CitaRevision[ citarevisionID=" + citarevisionID + " ]";
    }
    
}
