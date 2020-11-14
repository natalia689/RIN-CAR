/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author aalex
 */
@Entity
@Table(name = "producto_rin")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ProductoRin.findAll", query = "SELECT p FROM ProductoRin p")
    , @NamedQuery(name = "ProductoRin.findByProductorinID", query = "SELECT p FROM ProductoRin p WHERE p.productorinID = :productorinID")
    , @NamedQuery(name = "ProductoRin.findByColorRin", query = "SELECT p FROM ProductoRin p WHERE p.colorRin = :colorRin")
    , @NamedQuery(name = "ProductoRin.findByEstadoRin", query = "SELECT p FROM ProductoRin p WHERE p.estadoRin = :estadoRin")
    , @NamedQuery(name = "ProductoRin.findByFechaIngreso", query = "SELECT p FROM ProductoRin p WHERE p.fechaIngreso = :fechaIngreso")
    , @NamedQuery(name = "ProductoRin.findByCantidadStock", query = "SELECT p FROM ProductoRin p WHERE p.cantidadStock = :cantidadStock")
    , @NamedQuery(name = "ProductoRin.findByPrecioUnitario", query = "SELECT p FROM ProductoRin p WHERE p.precioUnitario = :precioUnitario")
    , @NamedQuery(name = "ProductoRin.findByCategoria", query = "SELECT p FROM ProductoRin p WHERE p.categoria = :categoria")
    , @NamedQuery(name = "ProductoRin.findByMarca", query = "SELECT p FROM ProductoRin p WHERE p.marca = :marca")})
public class ProductoRin implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Basic(optional = false)
    @Column(name = "producto_rinID")
    private Integer productorinID;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "color_rin")
    private String colorRin;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "estado_rin")
    private String estadoRin;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_ingreso")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaIngreso;
    @Basic(optional = false)
    @NotNull
    @Column(name = "cantidad_stock")
    private int cantidadStock;
    @Basic(optional = false)
    @NotNull
    @Column(name = "precio_unitario")
    private double precioUnitario;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "categoria")
    private String categoria;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "marca")
    private String marca;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProducto")
    private Collection<ComentarioProducto> comentarioProductoCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idRin")
    private Collection<OrdenCompra> ordenCompraCollection;

    public ProductoRin() {
    }

    public ProductoRin(Integer productorinID) {
        this.productorinID = productorinID;
    }

    public ProductoRin(Integer productorinID, String colorRin, String estadoRin, Date fechaIngreso, int cantidadStock, double precioUnitario, String categoria, String marca) {
        this.productorinID = productorinID;
        this.colorRin = colorRin;
        this.estadoRin = estadoRin;
        this.fechaIngreso = fechaIngreso;
        this.cantidadStock = cantidadStock;
        this.precioUnitario = precioUnitario;
        this.categoria = categoria;
        this.marca = marca;
    }

    public Integer getProductorinID() {
        return productorinID;
    }

    public void setProductorinID(Integer productorinID) {
        this.productorinID = productorinID;
    }

    public String getColorRin() {
        return colorRin;
    }

    public void setColorRin(String colorRin) {
        this.colorRin = colorRin;
    }

    public String getEstadoRin() {
        return estadoRin;
    }

    public void setEstadoRin(String estadoRin) {
        this.estadoRin = estadoRin;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public int getCantidadStock() {
        return cantidadStock;
    }

    public void setCantidadStock(int cantidadStock) {
        this.cantidadStock = cantidadStock;
    }

    public double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(double precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    @XmlTransient
    public Collection<ComentarioProducto> getComentarioProductoCollection() {
        return comentarioProductoCollection;
    }

    public void setComentarioProductoCollection(Collection<ComentarioProducto> comentarioProductoCollection) {
        this.comentarioProductoCollection = comentarioProductoCollection;
    }

    @XmlTransient
    public Collection<OrdenCompra> getOrdenCompraCollection() {
        return ordenCompraCollection;
    }

    public void setOrdenCompraCollection(Collection<OrdenCompra> ordenCompraCollection) {
        this.ordenCompraCollection = ordenCompraCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (productorinID != null ? productorinID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ProductoRin)) {
            return false;
        }
        ProductoRin other = (ProductoRin) object;
        if ((this.productorinID == null && other.productorinID != null) || (this.productorinID != null && !this.productorinID.equals(other.productorinID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.ProductoRin[ productorinID=" + productorinID + " ]";
    }
    
}
