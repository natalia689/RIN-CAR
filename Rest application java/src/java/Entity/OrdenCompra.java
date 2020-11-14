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
@Table(name = "orden_compra")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "OrdenCompra.findAll", query = "SELECT o FROM OrdenCompra o")
    , @NamedQuery(name = "OrdenCompra.findById", query = "SELECT o FROM OrdenCompra o WHERE o.id = :id")
    , @NamedQuery(name = "OrdenCompra.findByTipoVehiculo", query = "SELECT o FROM OrdenCompra o WHERE o.tipoVehiculo = :tipoVehiculo")
    , @NamedQuery(name = "OrdenCompra.findByCantidadVendida", query = "SELECT o FROM OrdenCompra o WHERE o.cantidadVendida = :cantidadVendida")
    , @NamedQuery(name = "OrdenCompra.findByCosto", query = "SELECT o FROM OrdenCompra o WHERE o.costo = :costo")
    , @NamedQuery(name = "OrdenCompra.findByMedioPago", query = "SELECT o FROM OrdenCompra o WHERE o.medioPago = :medioPago")
    , @NamedQuery(name = "OrdenCompra.findByEstadoCompra", query = "SELECT o FROM OrdenCompra o WHERE o.estadoCompra = :estadoCompra")
    , @NamedQuery(name = "OrdenCompra.findByTipoCompra", query = "SELECT o FROM OrdenCompra o WHERE o.tipoCompra = :tipoCompra")
    , @NamedQuery(name = "OrdenCompra.findByFechaCompra", query = "SELECT o FROM OrdenCompra o WHERE o.fechaCompra = :fechaCompra")})
public class OrdenCompra implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Basic(optional = false)
    @Column(name = "ID")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "tipo_vehiculo")
    private String tipoVehiculo;
    @Basic(optional = false)
    @NotNull
    @Column(name = "cantidad_vendida")
    private int cantidadVendida;
    @Basic(optional = false)
    @NotNull
    @Column(name = "costo")
    private double costo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "medio_pago")
    private String medioPago;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "estado_compra")
    private String estadoCompra;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "tipo_compra")
    private String tipoCompra;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_compra")
    @Temporal(TemporalType.DATE)
    private Date fechaCompra;
    @JoinColumn(name = "id_cliente", referencedColumnName = "usuarioID")
    @ManyToOne(optional = false)
    private Usuario idCliente;
    @JoinColumn(name = "id_proveedor", referencedColumnName = "usuarioID")
    @ManyToOne(optional = false)
    private Usuario idProveedor;
    @JoinColumn(name = "id_rin", referencedColumnName = "producto_rinID")
    @ManyToOne(optional = false)
    private ProductoRin idRin;

    public OrdenCompra() {
    }

    public OrdenCompra(Integer id) {
        this.id = id;
    }

    public OrdenCompra(Integer id, String tipoVehiculo, int cantidadVendida, double costo, String medioPago, String estadoCompra, String tipoCompra, Date fechaCompra) {
        this.id = id;
        this.tipoVehiculo = tipoVehiculo;
        this.cantidadVendida = cantidadVendida;
        this.costo = costo;
        this.medioPago = medioPago;
        this.estadoCompra = estadoCompra;
        this.tipoCompra = tipoCompra;
        this.fechaCompra = fechaCompra;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoVehiculo() {
        return tipoVehiculo;
    }

    public void setTipoVehiculo(String tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    }

    public int getCantidadVendida() {
        return cantidadVendida;
    }

    public void setCantidadVendida(int cantidadVendida) {
        this.cantidadVendida = cantidadVendida;
    }

    public double getCosto() {
        return costo;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public String getMedioPago() {
        return medioPago;
    }

    public void setMedioPago(String medioPago) {
        this.medioPago = medioPago;
    }

    public String getEstadoCompra() {
        return estadoCompra;
    }

    public void setEstadoCompra(String estadoCompra) {
        this.estadoCompra = estadoCompra;
    }

    public String getTipoCompra() {
        return tipoCompra;
    }

    public void setTipoCompra(String tipoCompra) {
        this.tipoCompra = tipoCompra;
    }

    public Date getFechaCompra() {
        return fechaCompra;
    }

    public void setFechaCompra(Date fechaCompra) {
        this.fechaCompra = fechaCompra;
    }

    public Usuario getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Usuario idCliente) {
        this.idCliente = idCliente;
    }

    public Usuario getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(Usuario idProveedor) {
        this.idProveedor = idProveedor;
    }

    public ProductoRin getIdRin() {
        return idRin;
    }

    public void setIdRin(ProductoRin idRin) {
        this.idRin = idRin;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof OrdenCompra)) {
            return false;
        }
        OrdenCompra other = (OrdenCompra) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.OrdenCompra[ id=" + id + " ]";
    }
    
}
