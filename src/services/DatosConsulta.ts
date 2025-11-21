import jsPDF from 'jspdf';

interface DatosConsulta {
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  rol: string;
  fecha: string;
  mesa: string;
  piso: string;
  salon: string;
  ubicacion: {
    nombre: string;
    direccion: string;
  };
}
export const generarPDFConsulta = (datos: DatosConsulta): void => {
  const doc = new jsPDF();
  
  const colorRojo: [number, number, number] = [179, 2, 39];
  const colorGris: [number, number, number] = [102, 102, 102];
  
  doc.setFillColor(colorRojo[0], colorRojo[1], colorRojo[2]);
  doc.rect(0, 0, 210, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('ONPE - Consulta de Votación', 105, 15, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(colorRojo[0], colorRojo[1], colorRojo[2]);
  doc.text('Datos Personales', 20, 40);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`DNI: ${datos.dni}`, 20, 50);
  doc.text(`Nombres: ${datos.nombres}`, 20, 58);
  doc.text(`Apellido Paterno: ${datos.apellidoPaterno}`, 20, 66);
  doc.text(`Apellido Materno: ${datos.apellidoMaterno}`, 20, 74);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(colorRojo[0], colorRojo[1], colorRojo[2]);
  doc.text('Información Electoral', 20, 90);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Rol: ${datos.rol}`, 20, 100);
  doc.text(`Fecha de Votación: ${datos.fecha}`, 20, 108);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(colorRojo[0], colorRojo[1], colorRojo[2]);
  doc.text('Mesa de Votación', 20, 124);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Mesa: ${datos.mesa}`, 20, 134);
  doc.text(`Piso: ${datos.piso}`, 20, 142);
  doc.text(`Salón: ${datos.salon}`, 20, 150);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(colorRojo[0], colorRojo[1], colorRojo[2]);
  doc.text('Local de Votación', 20, 166);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Colegio: ${datos.ubicacion.nombre}`, 20, 176);
  doc.text(`Dirección: ${datos.ubicacion.direccion}`, 20, 184, { maxWidth: 170 });
  
  doc.setFontSize(10);
  doc.setTextColor(colorGris[0], colorGris[1], colorGris[2]);
  doc.text(`Generado el: ${new Date().toLocaleString('es-PE')}`, 105, 280, { align: 'center' });
  doc.text('Documento válido sin firma ni sello', 105, 287, { align: 'center' });
  
  doc.save(`ONPE_Consulta_${datos.dni}.pdf`);
};