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
@Table(name = "dia_contable")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "DiaContable.findAll", query = "SELECT d FROM DiaContable d")
    , @NamedQuery(name = "DiaContable.findByDiacontableID", query = "SELECT d FROM DiaContable d WHERE d.diacontableID = :diacontableID")
    , @NamedQuery(name = "DiaContable.findByFechaCreacion", query = "SELECT d FROM DiaContable d WHERE d.fechaCreacion = :fechaCreacion")
    , @NamedQuery(name = "DiaContable.findByTotalGanancias", query = "SELECT d FROM DiaContable d WHERE d.totalGanancias = :totalGanancias")})
public class DiaContable implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "dia_contableID")
    private String diacontableID;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_creacion")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaCreacion;
    @Basic(optional = false)
    @NotNull
    @Column(name = "total_ganancias")
    private double totalGanancias;

    public DiaContable() {
    }

    public DiaContable(String diacontableID) {
        this.diacontableID = diacontableID;
    }

    public DiaContable(String diacontableID, Date fechaCreacion, double totalGanancias) {
        this.diacontableID = diacontableID;
        this.fechaCreacion = fechaCreacion;
        this.totalGanancias = totalGanancias;
    }

    public String getDiacontableID() {
        return diacontableID;
    }

    public void setDiacontableID(String diacontableID) {
        this.diacontableID = diacontableID;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public double getTotalGanancias() {
        return totalGanancias;
    }

    public void setTotalGanancias(double totalGanancias) {
        this.totalGanancias = totalGanancias;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (diacontableID != null ? diacontableID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof DiaContable)) {
            return false;
        }
        DiaContable other = (DiaContable) object;
        if ((this.diacontableID == null && other.diacontableID != null) || (this.diacontableID != null && !this.diacontableID.equals(other.diacontableID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.DiaContable[ diacontableID=" + diacontableID + " ]";
    }
    
}
