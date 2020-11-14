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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author aalex
 */
@Entity
@Table(name = "comentario_producto")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ComentarioProducto.findAll", query = "SELECT c FROM ComentarioProducto c")
    , @NamedQuery(name = "ComentarioProducto.findByComentarioproductoID", query = "SELECT c FROM ComentarioProducto c WHERE c.comentarioproductoID = :comentarioproductoID")
    , @NamedQuery(name = "ComentarioProducto.findByFechaComentario", query = "SELECT c FROM ComentarioProducto c WHERE c.fechaComentario = :fechaComentario")})
public class ComentarioProducto implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Basic(optional = false)
    @Column(name = "comentario_productoID")
    private Integer comentarioproductoID;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_comentario")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaComentario;
    @JoinColumn(name = "id_usuario", referencedColumnName = "usuarioID")
    @ManyToOne(optional = false)
    private Usuario idUsuario;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idComentario")
    private Collection<ComentarioProducto> comentarioProductoCollection;
    @JoinColumn(name = "id_comentario", referencedColumnName = "comentario_productoID")
    @ManyToOne(optional = false)
    private ComentarioProducto idComentario;
    @JoinColumn(name = "id_producto", referencedColumnName = "producto_rinID")
    @ManyToOne(optional = false)
    private ProductoRin idProducto;

    public ComentarioProducto() {
    }

    public ComentarioProducto(Integer comentarioproductoID) {
        this.comentarioproductoID = comentarioproductoID;
    }

    public ComentarioProducto(Integer comentarioproductoID, Date fechaComentario) {
        this.comentarioproductoID = comentarioproductoID;
        this.fechaComentario = fechaComentario;
    }

    public Integer getComentarioproductoID() {
        return comentarioproductoID;
    }

    public void setComentarioproductoID(Integer comentarioproductoID) {
        this.comentarioproductoID = comentarioproductoID;
    }

    public Date getFechaComentario() {
        return fechaComentario;
    }

    public void setFechaComentario(Date fechaComentario) {
        this.fechaComentario = fechaComentario;
    }

    public Usuario getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Usuario idUsuario) {
        this.idUsuario = idUsuario;
    }

    @XmlTransient
    public Collection<ComentarioProducto> getComentarioProductoCollection() {
        return comentarioProductoCollection;
    }

    public void setComentarioProductoCollection(Collection<ComentarioProducto> comentarioProductoCollection) {
        this.comentarioProductoCollection = comentarioProductoCollection;
    }

    public ComentarioProducto getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(ComentarioProducto idComentario) {
        this.idComentario = idComentario;
    }

    public ProductoRin getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(ProductoRin idProducto) {
        this.idProducto = idProducto;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (comentarioproductoID != null ? comentarioproductoID.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ComentarioProducto)) {
            return false;
        }
        ComentarioProducto other = (ComentarioProducto) object;
        if ((this.comentarioproductoID == null && other.comentarioproductoID != null) || (this.comentarioproductoID != null && !this.comentarioproductoID.equals(other.comentarioproductoID))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Entity.ComentarioProducto[ comentarioproductoID=" + comentarioproductoID + " ]";
    }
    
}
